import { NextResponse } from 'next/server';
import { Context } from '@/_lib/types';
import { postgrestFetch, getUserFromRequest, callStoredProcedure } from '@/_utils/rest-handlers';
import { catchError, authorizationError, apiError } from '@/_utils/api-errors';
import { addPluralityWhenApplicable } from '@/_supabase/server-functions';
import { requiresUserId, foreignTableMap } from '@/_lib/constants';

export async function GET(request: Request, context: Context) {
  try {
    const { user, jwt } = await getUserFromRequest();
    if (!user || !jwt) return authorizationError();

    let {
      params: { resource },
    } = context;
    resource = addPluralityWhenApplicable(resource);

    const { searchParams } = new URL(request.url);

    const userId = requiresUserId.includes(resource) ? user.id : undefined;

    const { json, error } = await postgrestFetch({ resource, jwt, searchParams, userId });

    if (error) return apiError(error);

    return NextResponse.json(json);
  } catch (error) {
    return catchError(error);
  }
}

export async function POST(request: Request, context: Context) {
  return handlePostOrPatch(request, context, 'POST');
}

export async function PATCH(request: Request, context: Context) {
  return handlePostOrPatch(request, context, 'PATCH');
}

// as of v1, POST and PATCH are just for `/users/current/cart` and `users/current/wishlist`
// if this ever expands, consider manually grouping the routes, especially since plurality is not reliably consistent
const handlePostOrPatch = async (request: Request, context: Context, method: string) => {
  try {
    const isPatch = method === 'PATCH';

    const { user, jwt } = await getUserFromRequest();
    if (!user || !jwt) return authorizationError();

    const { params } = context;
    const { resource: resourceNameSingular } = params;
    const resourceNamePlural = `${resourceNameSingular}s`;
    const foreignResource = foreignTableMap[resourceNamePlural];

    const requestBody = await request.json();

    // get resource id based on the current user's id
    const { json, error } = await postgrestFetch({ resource: resourceNamePlural, jwt });
    if (error) return apiError(error);
    const user_resource_id = json?.data[0]?.id || '';

    // check if item is already in cart/wishlist
    const { json: existingItemJson, error: existingItemError } = await postgrestFetch({
      resource: foreignResource,
      jwt,
      searchParams: new URLSearchParams({
        [`${resourceNameSingular}_id`]: user_resource_id,
        product_id: requestBody.product_id,
      }),
    });

    if (isPatch && !existingItemJson?.data?.length) {
      return apiError(
        `Product with id ${requestBody.product_id} is not in your ${resourceNameSingular}`
      );
    }

    if (!existingItemError && existingItemJson?.data.length) {
      if (resourceNamePlural === 'carts') {
        const storedProcedureParams = isPatch
          ? { remove_entirely_param: requestBody.remove || false }
          : { increment_by: requestBody.quantity || 1 };

        const { error: cartError } = await callStoredProcedure({
          procedureName: isPatch ? 'decrease_cart_quantity' : 'increment_cart_quantity',
          jwt,
          params: {
            product_id_param: requestBody.product_id,
            cart_id_param: existingItemJson.data[0].cart_id,
            ...storedProcedureParams,
          },
        });

        if (cartError) return apiError(cartError);
      } else if (resourceNamePlural === 'wishlists') {
        if (!isPatch)
          return NextResponse.json({
            error: `Product with id ${requestBody.product_id} is already in your wishlist`,
          });

        const { error: deleteError } = await postgrestFetch({
          resource: foreignResource,
          jwt,
          method: 'DELETE',
          searchParams: new URLSearchParams({
            [`${resourceNameSingular}_id`]: user_resource_id,
            product_id: requestBody.product_id,
          }),
        });

        if (deleteError) return apiError(deleteError);
      }
    } else if (!isPatch) {
      requestBody[`${resourceNameSingular}_id`] = user_resource_id; // e.g. carts_id -> cart_id

      const { error } = await postgrestFetch({
        resource: foreignResource,
        jwt,
        method: 'POST',
        body: requestBody,
      });

      if (error) return apiError(error);
    }

    // return the updated resource
    const { json: updatedResource, error: updatedResourceError } = await postgrestFetch({
      resource: resourceNamePlural,
      jwt,
    });

    if (updatedResourceError) return apiError(updatedResourceError);

    return NextResponse.json(updatedResource);
  } catch (error) {
    return catchError(error);
  }
};
