import { cache } from 'react';
import supabase from '@/_supabase/create-client';

export const getColumnsWithType = cache(async (table: string) => {
  return await supabase.rpc('get_cols_with_type', { tname: table });
});

export async function getSessionData() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

const resourcesWithForeignTables = [
  {
    resourceName: 'purchases',
    foreignTable: 'purchase_products',
    column: 'purchase_id',
    foreignTableColumns: 'product_id, products(id, sku, category_id, images, brand, name)',
  },
  {
    resourceName: 'carts',
    foreignTable: 'cart_products',
    column: 'cart_id',
    foreignTableColumns:
      'product_id, products(id, sku, category_id, images, brand, name, regular_price, sale_price)',
  },
  {
    resourceName: 'wishlists',
    foreignTable: 'wishlist_products',
    column: 'wishlist_id',
    foreignTableColumns:
      'product_id, products(id, sku, category_id, images, brand, name, regular_price, sale_price)',
  },
];

export const generateForeignTableSelectionWhenApplicable = (
  resource: string,
  searchParams: URLSearchParams
) => {
  const isAccessingJoinedResource = resourcesWithForeignTables.some(
    ({ resourceName }) => resourceName === resource
  );
  let selection = searchParams.get('fields') || '*';

  if (isAccessingJoinedResource) {
    const curResource = resourcesWithForeignTables.find(
      ({ resourceName }) => resourceName === resource
    );
    if (curResource) {
      selection = `${selection}, ${curResource.foreignTable}(${curResource.foreignTableColumns})`;
    }
  }

  return selection;
};
