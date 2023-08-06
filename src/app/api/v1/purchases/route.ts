import { NextResponse } from 'next/server';
import {
  catchError,
  apiError,
  supabaseGetWithFeatures,
  authorizationError,
} from '@/_utils/rest-handlers';
import {
  calculateOrderTotal,
  generateForeignTableSelectionWhenApplicable,
} from '@/_supabase/functions';
import { Product } from '@/_lib/types';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const { searchParams } = new URL(request.url);

    const selection = generateForeignTableSelectionWhenApplicable('purchases', searchParams);

    const query = supabase.from('purchases').select(selection, { count: 'exact' });

    const responseJson = await supabaseGetWithFeatures(query, searchParams);

    return NextResponse.json(responseJson);
  } catch (error) {
    return catchError(error);
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return authorizationError();

    const requestBody = await request.json();
    requestBody['user_id'] = session.user.id;

    const total = await calculateOrderTotal(requestBody);

    const { data: purchaseData, error: purchaseError } = await supabase
      .from('purchases')
      .insert({ user_id: session.user.id, total })
      .select()
      .maybeSingle();

    if (purchaseError) return apiError(purchaseError);

    const purchaseProductsPayload = requestBody.products
      .filter((product: Product) => product.product_id)
      .map(({ product_id, quantity }: Product) => {
        return {
          purchase_id: purchaseData.id,
          product_id,
          quantity: quantity || 1,
        };
      });

    const { error: purchaseProductsError } = await supabase
      .from('purchase_products')
      .insert(purchaseProductsPayload);

    if (purchaseProductsError) return apiError(purchaseProductsError);

    const { data: finalPurchaseData, error: finalPurchaseError } = await supabase
      .from('purchases')
      .select(
        '*, purchase_products(product_id, quantity, product_data:products(id, name, sale_price, images))'
      )
      .eq('id', purchaseData.id);

    if (finalPurchaseError) return apiError(finalPurchaseError);

    return NextResponse.json({ data: finalPurchaseData });
  } catch (error) {
    return catchError(error);
  }
}
