import { NextResponse } from 'next/server';
import supabase from '@/_supabase/create-client';
import { Context } from '@/_lib/types';
import { addFeaturesToQuery } from '@/_utils/api-features';

interface ColumnMap {
  [key: string]: string;
}

const columnMap: ColumnMap = {
  categories: 'category_id',
  products: 'product_id',
};

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource, resource_id, sub_resource } = params; // categories, 1, products
    const { searchParams } = new URL(request.url);

    let query = supabase
      .from(sub_resource)
      .select(searchParams.get('fields') || '*', { count: 'planned' })
      .eq(columnMap[resource], resource_id);

    query = addFeaturesToQuery(query, searchParams);

    const { data, error, count } = await query;

    if (error || !data) {
      return NextResponse.json(
        { error: `Failed to fetch id ${sub_resource} from ${resource} with id ${resource_id}.` },
        { status: 400 }
      );
    }

    return NextResponse.json({ count, data });
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
