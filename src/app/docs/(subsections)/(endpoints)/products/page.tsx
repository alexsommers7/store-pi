import { SectionHeading } from '@/_components/typography/sectionHeading';
import { EndpointIntro } from '@/docs/_components/endpointIntro';
import { SampleBody } from '@/docs/_components/sampleBody';
import { SampleResponse } from '@/docs/_components/sampleResponse';
import { createNewProductBody, updateProductBody } from '@/_lib/api-samples/sampleBodies';
import {
  getAllProductsResponse,
  getProductResponse,
  createNewProductResponse,
  updateProductResponse,
} from '@/_lib/api-samples/sampleResponses';

export default function Products() {
  return (
    <>
      <SectionHeading>Products</SectionHeading>

      <p>
        A total of 50 products exist in the database. Each product belongs to a category and its
        object contains properties such as pricing, review data, specs, and more.
      </p>

      <EndpointIntro
        anchorId='get-products'
        label='Get All Products'
        httpMethod='GET'
        slug='products'
      />
      <SampleResponse code={getAllProductsResponse} />

      <EndpointIntro
        anchorId='get-product'
        label='Get Product'
        httpMethod='GET'
        slug='products/:id'
      />
      <SampleResponse code={getProductResponse} />

      <EndpointIntro
        anchorId='create-product'
        label='Create New Product'
        httpMethod='POST'
        slug='products'
      />
      <SampleBody code={createNewProductBody} />
      <SampleResponse code={createNewProductResponse} />

      <EndpointIntro
        anchorId='update-product'
        label='Update Product'
        httpMethod='PATCH'
        slug='products/:id'
      />
      <SampleBody code={updateProductBody} />
      <SampleResponse code={updateProductResponse} />

      <EndpointIntro
        anchorId='delete-product'
        label='Delete Product'
        httpMethod='DELETE'
        slug='products/:id'
        isDelete
      />
    </>
  );
}
