import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { Context } from '@/_lib/types';
import { supabaseGetWithFeatures } from '@/_utils/rest-handlers';
import { generateForeignTableSelectionWhenApplicable } from '@/_supabase/functions';

interface ColumnMap {
  [key: string]: string;
}

const columnMap: ColumnMap = {
  categories: 'category_id',
  products: 'product_id',
  reviews: 'review_id',
  users: 'user_id',
};

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource, resource_id, sub_resource } = params; // e.g. { 'categories', 1, 'products' }
    const { searchParams } = new URL(request.url);

    const selection = generateForeignTableSelectionWhenApplicable(resource, searchParams);

    const query = supabase
      .from(sub_resource)
      .select(selection, { count: 'exact' })
      .eq(columnMap[resource], resource_id);

    const responseJson = await supabaseGetWithFeatures(query, searchParams);

    return NextResponse.json(responseJson);
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
