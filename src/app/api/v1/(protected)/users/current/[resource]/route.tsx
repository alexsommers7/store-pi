import { NextResponse } from 'next/server';
import { Context } from '@/_lib/types';
import {
  supabaseGetWithFeatures,
  catchError,
  authorizationError,
  apiError,
} from '@/_utils/rest-handlers';
import {
  getUserData,
  generateForeignTableSelectionWhenApplicable,
  addPluralityWhenApplicable,
} from '@/_supabase/functions';
import { publicAndPrivateRead, foreignTableMap } from '@/_lib/constants';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request, context: Context) {
  try {
    const supabase = createServerComponentClient({ cookies });

    const userData = await getUserData();
    if (!userData) return authorizationError();

    const { params } = context;
    let { resource } = params;
    resource = addPluralityWhenApplicable(resource);

    const { searchParams } = new URL(request.url);

    const selection = generateForeignTableSelectionWhenApplicable(resource, searchParams);

    // RLS handles user_id matching at DB level ...
    const query = supabase.from(resource).select(selection, { count: 'exact' });

    // ... except for these resources
    if (publicAndPrivateRead.includes(resource)) {
      query.eq('user_id', userData.id);
    }

    const responseJson = await supabaseGetWithFeatures(query, searchParams);

    return NextResponse.json(responseJson);
  } catch (error) {
    return catchError(error);
  }
}

// as of v1, POST and PATCH are just for `/users/current/cart` and `users/current/wishlist`
// if this ever expands, consider manually defining the routes, especially since plurality may not be consistent
export async function POST(request: Request, context: Context) {
  try {
    const supabase = createServerComponentClient({ cookies });

    const userData = await getUserData();
    if (!userData) return authorizationError();

    const { params } = context;
    const { resource: resourceNameSingular } = params;
    const resourceNamePlural = `${resourceNameSingular}s`;

    const requestBody = await request.json();

    // get resource id based on the current user's id
    const {
      data: { id },
      error: resourceIdError,
    } = await supabase.from(resourceNamePlural).select().maybeSingle();

    if (resourceIdError) return apiError(resourceIdError);

    // check if item is already in cart/wishlist
    const { data: existingItem, error: existingItemError } = await supabase
      .from(foreignTableMap[resourceNamePlural])
      .select()
      .eq(`${resourceNameSingular}_id`, id)
      .eq('product_id', requestBody.product_id)
      .maybeSingle();

    if (!existingItemError && existingItem) {
      if (resourceNamePlural === 'carts') {
        const { error: cartError } = await supabase.rpc('increment_cart_quantity', {
          increment_by: requestBody.quantity || 1,
          product_id_param: requestBody.product_id,
          cart_id_param: existingItem.cart_id,
        });

        if (cartError) return apiError(cartError);
      } else if (resourceNamePlural === 'wishlists') {
        return NextResponse.json({
          error: `Product ${requestBody.product_id} is already in your wishlist`,
        });
      }
    } else {
      // e.g. carts_id -> cart_id
      requestBody[`${resourceNameSingular}_id`] = id;

      const { error: insertError } = await supabase
        .from(foreignTableMap[resourceNamePlural])
        .insert([requestBody]);

      if (insertError) return apiError(insertError);
    }

    // return the uddated resource
    const selection = generateForeignTableSelectionWhenApplicable(resourceNamePlural);

    const { data: updatedResource, error: updatedResourceError } = await supabase
      .from(resourceNamePlural)
      .select(selection)
      .maybeSingle();

    if (updatedResourceError) return apiError(updatedResourceError);

    return NextResponse.json({ data: updatedResource });
  } catch (error) {
    return catchError(error);
  }
}

export async function PATCH(request: Request, context: Context) {
  try {
    const supabase = createServerComponentClient({ cookies });

    const userData = await getUserData();
    if (!userData) return authorizationError();

    const { params } = context;
    const { resource: resourceNameSingular } = params;
    const resourceNamePlural = `${resourceNameSingular}s`;

    const requestBody = await request.json();

    // get resource id based on the current user's id
    const {
      data: { id },
      error: resourceIdError,
    } = await supabase.from(resourceNamePlural).select().eq('user_id', userData.id).maybeSingle();

    if (resourceIdError) return apiError(resourceIdError);

    // check if item is already in cart/wishlist
    const { data: existingItem, error: existingItemError } = await supabase
      .from(foreignTableMap[resourceNamePlural])
      .select()
      .eq(`${resourceNameSingular}_id`, id)
      .eq('product_id', requestBody.product_id)
      .maybeSingle();

    if (!existingItemError && existingItem) {
      if (resourceNamePlural === 'carts') {
        const { error: cartError } = await supabase.rpc('decrease_cart_quantity', {
          product_id_param: requestBody.product_id,
          cart_id_param: existingItem.cart_id,
          remove_entirely_param: requestBody.remove || false,
        });

        if (cartError) return apiError(cartError);
      } else if (resourceNamePlural === 'wishlists') {
        const { error: deleteError } = await supabase
          .from(foreignTableMap[resourceNamePlural])
          .delete()
          .eq(`${resourceNameSingular}_id`, id)
          .eq('product_id', requestBody.product_id);

        if (deleteError) return apiError(deleteError);
      }
    }

    // return the updated resource
    const selection = generateForeignTableSelectionWhenApplicable(resourceNamePlural);

    const { data: updatedResource, error: updatedResourceError } = await supabase
      .from(resourceNamePlural)
      .select(selection)
      .maybeSingle();

    if (updatedResourceError) return apiError(updatedResourceError);

    return NextResponse.json({ data: updatedResource });
  } catch (error) {
    return catchError(error);
  }
}
