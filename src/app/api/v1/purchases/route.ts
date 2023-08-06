import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { catchError, apiError } from '@/_utils/rest-handlers';
import { calculateOrderTotal, getUserData } from '@/_supabase/functions';
import { Product } from '@/_lib/types';

export async function POST(request: Request) {
  try {
    const userData = await getUserData();
    if (!userData) return apiError('You must be logged in to perform this action.');

    const requestBody = await request.json();
    requestBody['user_id'] = userData.id;

    const total = await calculateOrderTotal(requestBody);

    const { data: purchaseData, error: purchaseError } = await supabase
      .from('purchases')
      .insert({ user_id: userData.id, total })
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
