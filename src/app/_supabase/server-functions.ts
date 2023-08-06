import { resourcesWithForeignTables } from '@/_lib/constants';
import { Product } from '@/_lib/types';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const generateForeignTableSelectionWhenApplicable = (
  resource: string,
  searchParams?: URLSearchParams
) => {
  const isAccessingJoinedResource = resourcesWithForeignTables.some(
    ({ resourceName }) => resourceName === resource
  );
  let selection = searchParams?.get('fields') || '*';

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

// check if a given date indicates a resource that was part of the default dataset
export const isOriginalResource = (createdAt: string | null) => {
  if (!createdAt) return false;
  return new Date(createdAt) < new Date(1690936726017);
};

// these resources are plural in the db, but are represented as singular in the api for semantics
export const addPluralityWhenApplicable = (resource: string) => {
  const singularResources = ['cart', 'wishlist'];

  if (singularResources.includes(resource)) return `${resource}s`;
  return resource;
};

export const calculateOrderTotal = async (requestBody: any) => {
  const supabase = createRouteHandlerClient({ cookies });

  if (!requestBody.products) return 0;

  const { data: productPricingData, error: productPricingError } = await supabase
    .from('products')
    .select('id, sale_price')
    .in(
      'id',
      requestBody.products.map((product: Product) => product.product_id)
    );

  if (productPricingError) return 0;

  const total = productPricingData.reduce((acc: number, product: any) => {
    return (
      acc +
      product.sale_price *
        requestBody.products.find((p: Product) => p.product_id === product.id).quantity
    );
  }, 0);

  return total;
};
