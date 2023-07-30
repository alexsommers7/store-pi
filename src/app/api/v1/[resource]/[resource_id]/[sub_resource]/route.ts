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
  reviews: 'review_id',
  users: 'user_id',
};

const resourcesWithForeignTables = [
  { resource: 'purchases', foreignTable: 'purchase_products', column: 'purchase_id' },
  { resource: 'carts', foreignTable: 'cart_products', column: 'cart_id' },
  { resource: 'wishlists', foreignTable: 'wishlist_products', column: 'wishlist_id' },
];

export async function GET(request: Request, context: Context) {
  try {
    const { params } = context;
    const { resource, resource_id, sub_resource } = params; // e.g. { 'categories', 1, 'products' }
    const { searchParams } = new URL(request.url);
    const isAccessingCurrentUser = resource === 'users' && resource_id === 'current';
    const isAccessingJoinedResource = resourcesWithForeignTables.some(
      ({ resource }) => resource === sub_resource
    );

    // handle foreign table querying
    let selection = searchParams.get('select') || '*';
    if (isAccessingJoinedResource) {
      const curResource = resourcesWithForeignTables.find(
        ({ resource }) => resource === sub_resource
      );
      if (curResource) {
        selection = `${selection}, ${curResource.foreignTable}(*)`;
      }
    }

    let query = supabase.from(sub_resource).select(selection, { count: 'exact' });

    // auth check
    let sessionData;
    if (isAccessingCurrentUser) {
      const { data } = await supabase.auth.getSession();
      sessionData = data.session;

      if (!sessionData || !sessionData.user) {
        return NextResponse.json({ error: 'Not logged in.' }, { status: 401 });
      }
    }

    // if not authenticated properly, return all rows
    // RLS will handle the exclusion of more personal data like wishlists, purchases, and carts at the DB level
    query =
      isAccessingCurrentUser && sessionData && sessionData.user
        ? query.eq(columnMap.users, sessionData.user.id)
        : query.eq(columnMap[resource], resource_id);

    query = addFeaturesToQuery(query, searchParams);

    const { data, error, count } = await query;

    if (error || !data) {
      return NextResponse.json(
        {
          error: `Failed to fetch from ${resource} with id ${resource_id}.`,
          message: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      count,
      data,
    });
  } catch (error) {
    return new NextResponse('An unexpected error occurred.', { status: 500 });
  }
}
