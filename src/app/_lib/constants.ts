import { Map } from '@/_lib/types';

export const apiOrigin =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/v1'
    : 'https://storepi.vercel.app/api/v1';

export const restUrlBase = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1`;

export const HTTPMethods = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const defaultUserPhotoUrl =
  'https://storepi-media.s3.us-west-1.amazonaws.com/img/users/default.png';

export const resourcesWithForeignTables = [
  {
    resourceName: 'purchases',
    foreignTable: 'purchase_products',
    column: 'purchase_id',
    foreignTableColumns:
      'product_id, quantity, product_data:products(id, sku, category_id, images, brand_id, name)',
  },
  {
    resourceName: 'carts',
    foreignTable: 'cart_products',
    column: 'cart_id',
    foreignTableColumns:
      'product_id, quantity, product_data:products(id, sku, category_id, images, brand_id, name, regular_price, sale_price)',
  },
  {
    resourceName: 'wishlists',
    foreignTable: 'wishlist_products',
    column: 'wishlist_id',
    foreignTableColumns:
      'product_id, product_data:products(id, sku, category_id, images, brand_id, name, regular_price, sale_price)',
  },
];

// these are resources that have public read access but we still want to allow filtering by user_id
export const requiresUserId = ['reviews'];

// for each resource, need to know the foreign table name to insert the new row into
export const foreignTableMap: Map = {
  carts: 'cart_products',
  wishlists: 'wishlist_products',
};

// for sub-resources e.g. categories/1/products
// in this example, would need to know to use 'category_id' as the foreign key in the products table
export const columnMap: Map = {
  categories: 'category_id',
  products: 'product_id',
  reviews: 'review_id',
  users: 'user_id',
  brands: 'brand_id',
  purchases: 'purchase_id',
};
