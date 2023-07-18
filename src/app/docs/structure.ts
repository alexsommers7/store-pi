import { HTTPMethods } from '@/_lib/constants';
import {
  createNewProductBody,
  createOrUpdateCategoryBody,
  createOrUpdateReviewBody,
  updateProductBody,
} from '@/_lib/api-samples/sampleBodies';
import {
  createNewProductResponse,
  createOrUpdateCategoryResponse,
  createOrUpdateReviewResponse,
  getAllBrandsResponse,
  getAllCategoriesResponse,
  getAllProductsInCategoryResponse,
  getAllProductsResponse,
  getAllReviewsResponse,
  getCurrentUserReviewsResponse,
  getProductResponse,
  getProductReviewsResponse,
  getReviewResponse,
  updateProductResponse,
} from '@/_lib/api-samples/sampleResponses';

export interface StructureItem {
  label: string;
  subitems: StructureSubItem[];
}

export interface StructureSubItem {
  label: string;
  slug: string;
  anchors: SubItemAnchor[];
}

export interface SubItemAnchor {
  label: string;
  hash: string;
  httpMethod: keyof typeof HTTPMethods;
  slug: string;
  body?: string;
  response?: string;
}

export const structure = [
  {
    label: 'Getting Started',
    subitems: [
      {
        label: 'Introduction',
        slug: 'introduction',
        anchors: [
          { label: 'Database Interaction', hash: 'database-interaction' },
          { label: 'CORS', hash: 'cors' },
          { label: 'Rate Limiting', hash: 'rate-limiting' },
          { label: 'Authorization', hash: 'authorization' },
          { label: 'Query Parameters', hash: 'query-parameters' },
          { label: 'Filtering', hash: 'filtering' },
          { label: 'GraphQL', hash: 'graphql' },
        ],
      },
    ],
  },
  {
    label: 'Data Models',
    subitems: [
      {
        label: 'Products',
        slug: 'products',
        anchors: [
          {
            label: 'Get All Products',
            hash: 'get-products',
            httpMethod: 'GET',
            slug: 'products',
            response: getAllProductsResponse,
          },
          {
            label: 'Get Product',
            hash: 'get-product',
            httpMethod: 'GET',
            slug: 'products/:id',
            response: getProductResponse,
          },
          {
            label: 'Get All Brands',
            hash: 'get-brands',
            httpMethod: 'GET',
            slug: 'brands',
            response: getAllBrandsResponse,
          },
          {
            label: 'Create New Product',
            hash: 'create-product',
            httpMethod: 'POST',
            slug: 'products',
            body: createNewProductBody,
            response: createNewProductResponse,
          },
          {
            label: 'Update Product',
            hash: 'update-product',
            httpMethod: 'PATCH',
            slug: 'products',
            body: updateProductBody,
            response: updateProductResponse,
          },
          {
            label: 'Delete Product',
            hash: 'delete-product',
            httpMethod: 'DELETE',
            slug: 'products',
          },
        ],
      },
      {
        label: 'Reviews',
        slug: 'reviews',
        anchors: [
          {
            label: 'Get All Reviews',
            hash: 'get-reviews',
            httpMethod: 'GET',
            slug: 'reviews',
            response: getAllReviewsResponse,
          },
          {
            label: 'Get Review',
            hash: 'get-review',
            httpMethod: 'GET',
            slug: 'reviews',
            response: getReviewResponse,
          },
          {
            label: `Get Product's Reviews`,
            hash: 'get-product-reviews',
            httpMethod: 'GET',
            slug: 'reviews',
            response: getProductReviewsResponse,
          },
          {
            label: 'Get Current User Reviews',
            hash: 'get-current-user-reviews',
            httpMethod: 'GET',
            slug: 'reviews',
            response: getCurrentUserReviewsResponse,
          },
          {
            label: 'Create New Review',
            hash: 'create-review',
            httpMethod: 'POST',
            slug: 'reviews',
            body: createOrUpdateReviewBody,
            response: createOrUpdateReviewResponse,
          },
          {
            label: 'Update Review',
            hash: 'update-review',
            httpMethod: 'PATCH',
            slug: 'reviews',
            body: createOrUpdateReviewBody,
            response: createOrUpdateReviewResponse,
          },
          { label: 'Delete Review', hash: 'delete-review', httpMethod: 'DELETE', slug: 'reviews' },
        ],
      },
      {
        label: 'Categories',
        slug: 'categories',
        anchors: [
          {
            label: 'Get All Categories',
            hash: 'get-categories',
            httpMethod: 'GET',
            slug: 'categories',
            response: getAllCategoriesResponse,
          },
          {
            label: 'Get All Products in Category',
            hash: 'get-category-products',
            httpMethod: 'GET',
            slug: 'categories/:id/products',
            response: getAllProductsInCategoryResponse,
          },
          {
            label: 'Create New Category',
            hash: 'create-category',
            httpMethod: 'POST',
            slug: 'categories',
            body: createOrUpdateCategoryBody,
            response: createOrUpdateCategoryResponse,
          },
          {
            label: 'Update Category',
            hash: 'update-category',
            httpMethod: 'PATCH',
            slug: 'categories/:id',
            body: createOrUpdateCategoryBody,
            response: createOrUpdateCategoryResponse,
          },
          {
            label: 'Delete Category',
            hash: 'delete-category',
            httpMethod: 'DELETE',
            slug: 'categories/:id',
          },
        ],
      },
      { label: 'Carts', slug: 'carts', anchors: [] },
      { label: 'Purchases', slug: 'purchases', anchors: [] },
      { label: 'Wishlists', slug: 'wishlists', anchors: [] },
      { label: 'Users', slug: 'users', anchors: [] },
      { label: 'Authentication', slug: 'authentication', anchors: [] },
    ],
  },
  {
    label: 'Resources',
    subitems: [
      { label: 'Contributing', slug: 'contributing', anchors: [] },
      { label: 'Postman', slug: 'postman', anchors: [] },
      { label: 'GraphQL Playground', slug: 'graphql-playground', anchors: [] },
    ],
  },
];
