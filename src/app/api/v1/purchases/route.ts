import { NextResponse } from 'next/server';
import { catchError, apiError, authorizationError } from '@/_utils/api-errors';
import { calculateOrderTotal } from '@/_supabase/server-functions';
import { Product } from '@/_lib/types';
import { getUserFromRequest, postgrestFetch } from '@/_utils/rest-handlers';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const { json, error } = await postgrestFetch({ resource: 'purchases', searchParams });

    if (error) return apiError(error);

    return NextResponse.json(json);
  } catch (error) {
    return catchError(error);
  }
}

export async function POST(request: Request) {
  try {
    const { user, jwt } = await getUserFromRequest();
    if (!user || !jwt) return authorizationError();

    const requestBody = await request.json();

    const total = await calculateOrderTotal(requestBody);
    requestBody['total'] = total;

    const { json: purchaseData, error: purchaseError } = await postgrestFetch({
      resource: 'purchases',
      jwt,
      method: 'POST',
      body: { user_id: user.id, total },
    });

    if (purchaseError) return apiError(purchaseError);

    const purchaseProductsPayload = requestBody.products
      .filter((product: Product) => product.product_id)
      .map(({ product_id, quantity }: Product) => {
        return {
          purchase_id: purchaseData[0].id,
          product_id,
          quantity: quantity || 1,
        };
      });

    const { error: purchaseProductsError } = await postgrestFetch({
      resource: 'purchase_products',
      jwt,
      method: 'POST',
      body: purchaseProductsPayload,
    });

    if (purchaseProductsError) return apiError(purchaseProductsError);

    const { json: finalPurchaseData, error: finalPurchaseError } = await postgrestFetch({
      resource: 'purchases',
      jwt,
      searchParams: new URLSearchParams({ id: purchaseData[0].id }),
    });

    if (finalPurchaseError) return apiError(finalPurchaseError);

    return NextResponse.json({ data: finalPurchaseData.data });
  } catch (error) {
    return catchError(error);
  }
}
