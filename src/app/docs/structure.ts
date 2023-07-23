import { HTTPMethods } from '@/_lib/constants';
import {
  addProductToCurrentUserCartBody,
  addProductToCurrentUserWishlistBody,
  createNewProductBody,
  createOrUpdateCategoryBody,
  createOrUpdateReviewBody,
  createPurchaseBody,
  loginBody,
  removeProductFromCurrentUserCartBody,
  removeProductFromCurrentUserWishlistBody,
  signupBody,
  updateCurrentUserBody,
  updateProductBody,
} from '@/_lib/api-samples/sample-bodies';
import {
  addProductToCurrentUserCartResponse,
  addProductToCurrentUserWishlistResponse,
  createNewProductResponse,
  createOrUpdateCategoryResponse,
  createOrUpdateReviewResponse,
  createPurchaseResponse,
  getAllBrandsResponse,
  getAllCartsResponse,
  getAllCategoriesResponse,
  getAllProductsInCategoryResponse,
  getAllProductsResponse,
  getAllPurchasesResponse,
  getAllReviewsResponse,
  getAllUsersResponse,
  getCartResponse,
  getCurrentUserCartResponse,
  getCurrentUserPurchasesResponse,
  getCurrentUserReviewsResponse,
  getCurrentUserWishlistResponse,
  getProductResponse,
  getProductReviewsResponse,
  getPurchaseResponse,
  getReviewResponse,
  getUserResponse,
  loginResponse,
  signupResponse,
  updateCurrentUserResponse,
  updateProductResponse,
} from '@/_lib/api-samples/sample-responses';

export interface StructureItem {
  label: string;
  subitems: StructureSubItem[];
}

export interface StructureSubItem {
  label: string;
  slug: string;
  desc?: string;
  anchors: EndpointAnchor[] | NonEndpointAnchor[];
}

export interface EndpointAnchor {
  label: string;
  hash: string;
  httpMethod: keyof typeof HTTPMethods;
  slug: string;
  body?: string;
  response?: string;
  requiresAuth?: boolean;
  desc?: string;
}

export interface NonEndpointAnchor {
  label: string;
  hash: string;
}

export const structure = [
  {
    label: 'Getting Started',
    subitems: [
      {
        label: 'Introduction',
        slug: 'introduction',
        desc: 'A look at the purpose of this project and the technologies used.',
        anchors: [
          { label: 'Database Interaction', hash: 'database-interaction' },
          { label: 'CORS', hash: 'cors' },
          { label: 'Rate Limiting', hash: 'rate-limiting' },
          { label: 'Authorization', hash: 'authorization' },
          { label: 'Organizing Results', hash: 'organizing-results' },
          { label: 'Filtering Results', hash: 'filtering-results' },
          { label: 'GraphQL', hash: 'graphql' },
        ],
      },
      {
        label: 'Quick Start',
        slug: 'quick-start',
        desc: 'A quick glance at some common API calls to get started.',
        anchors: [],
      },
    ],
  },
  {
    label: 'Data Models',
    subitems: [
      {
        label: 'Products',
        slug: 'products',
        desc: 'A total of 50 products exist in the database. Each product belongs to a category and contains properties such as pricing, review data, specs, and more.',
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
            slug: 'products/:id',
            body: updateProductBody,
            response: updateProductResponse,
          },
          {
            label: 'Delete Product',
            hash: 'delete-product',
            httpMethod: 'DELETE',
            slug: 'products/:id',
          },
        ],
      },
      {
        label: 'Reviews',
        slug: 'reviews',
        desc: 'Every review is associated with a user. Each review contains properties such as rating, incentivization, verification, and more.',
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
            slug: 'products/:id/reviews',
            response: getProductReviewsResponse,
          },
          {
            label: 'Get Current User Reviews',
            hash: 'get-current-user-reviews',
            httpMethod: 'GET',
            slug: 'users/current/reviews',
            response: getCurrentUserReviewsResponse,
            requiresAuth: true,
          },
          {
            label: 'Create New Review',
            hash: 'create-review',
            httpMethod: 'POST',
            slug: 'products/:id/reviews',
            body: createOrUpdateReviewBody,
            response: createOrUpdateReviewResponse,
            requiresAuth: true,
          },
          {
            label: 'Update Review',
            hash: 'update-review',
            httpMethod: 'PATCH',
            slug: 'reviews/:id',
            body: createOrUpdateReviewBody,
            response: createOrUpdateReviewResponse,
            requiresAuth: true,
          },
          {
            label: 'Delete Review',
            hash: 'delete-review',
            httpMethod: 'DELETE',
            slug: 'reviews/:id',
            requiresAuth: true,
          },
        ],
      },
      {
        label: 'Categories',
        slug: 'categories',
        desc: 'There are six common e-commerce product categories available, each with multiple items belonging to it.',
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
      {
        label: 'Carts',
        slug: 'carts',
        desc: 'Each user has a cart associated with them. The cart will contain a products array, the cart total (string and numeric), and more. A cart must belong to a user.',
        anchors: [
          {
            label: 'Get All Carts',
            hash: 'get-carts',
            httpMethod: 'GET',
            slug: 'carts',
            response: getAllCartsResponse,
          },
          {
            label: 'Get Cart',
            hash: 'get-cart',
            httpMethod: 'GET',
            slug: 'carts/:id',
            response: getCartResponse,
          },
          {
            label: 'Get Current User Cart',
            hash: 'get-current-user-cart',
            httpMethod: 'GET',
            slug: 'users/current/cart',
            response: getCurrentUserCartResponse,
            requiresAuth: true,
          },
          {
            label: 'Add to Current User Cart',
            hash: 'add-to-current-user-cart',
            httpMethod: 'POST',
            slug: 'users/current/cart',
            body: addProductToCurrentUserCartBody,
            response: addProductToCurrentUserCartResponse,
            requiresAuth: true,
          },
          {
            label: 'Remove From Current User Cart',
            hash: 'remove-from-current-user-cart',
            httpMethod: 'DELETE',
            slug: 'users/current/cart',
            body: removeProductFromCurrentUserCartBody,
            requiresAuth: true,
          },
        ],
      },
      {
        label: 'Purchases',
        slug: 'purchases',
        desc: 'A total of 50 purchases exist in the database. Each purchase must belong to a user. Not every user has made a purchase, but some have made multiple.',
        anchors: [
          {
            label: 'Get All Purchases',
            hash: 'get-purchases',
            httpMethod: 'GET',
            slug: 'purchases',
            response: getAllPurchasesResponse,
          },
          {
            label: 'Get Purchase',
            hash: 'get-purchase',
            httpMethod: 'GET',
            slug: 'purchases/:id',
            response: getPurchaseResponse,
          },
          {
            label: 'Get Current User Purchases',
            hash: 'get-current-user-purchases',
            httpMethod: 'GET',
            slug: 'users/current/purchases',
            response: getCurrentUserPurchasesResponse,
            requiresAuth: true,
          },
          {
            label: 'Create New Purchase',
            hash: 'create-purchase',
            httpMethod: 'POST',
            slug: 'purchases',
            body: createPurchaseBody,
            response: createPurchaseResponse,
            requiresAuth: true,
          },
        ],
      },
      {
        label: 'Wishlists',
        slug: 'wishlists',
        desc: 'Every user is assigned a wishlist. Some will have an empty wishlist, while others will have products in theirs.',
        anchors: [
          {
            label: 'Get Current User WIshlist',
            hash: 'get-current-user-wishlist',
            httpMethod: 'GET',
            slug: 'users/current/wishlist',
            response: getCurrentUserWishlistResponse,
            requiresAuth: true,
          },
          {
            label: 'Add to Current User Wishlist',
            hash: 'add-to-current-user-wishlist',
            httpMethod: 'POST',
            slug: 'users/current/wishlist',
            body: addProductToCurrentUserWishlistBody,
            response: addProductToCurrentUserWishlistResponse,
            requiresAuth: true,
          },
          {
            label: 'Remove From Current User Wishlist',
            hash: 'remove-from-current-user-wishlist',
            httpMethod: 'DELETE',
            slug: 'users/current/wishlist',
            body: removeProductFromCurrentUserWishlistBody,
            requiresAuth: true,
          },
        ],
      },
      {
        label: 'Users',
        slug: 'users',
        desc: 'Each user object will contain general profile information, including a link to a stock photo hosted on S3.',
        anchors: [
          {
            label: 'Get All Users',
            hash: 'get-users',
            httpMethod: 'GET',
            slug: 'users',
            response: getAllUsersResponse,
          },
          {
            label: 'Get User',
            hash: 'get-user',
            httpMethod: 'GET',
            slug: 'users/:id',
            response: getUserResponse,
          },
          {
            label: 'Get Current User',
            hash: 'get-current-user',
            httpMethod: 'GET',
            slug: 'users/current',
            response: getUserResponse,
          },
          {
            label: 'Update Current User',
            hash: 'update-current-user',
            httpMethod: 'PATCH',
            slug: 'users/current',
            body: updateCurrentUserBody,
            response: updateCurrentUserResponse,
          },
          {
            label: 'Delete User',
            hash: 'delete-user',
            httpMethod: 'DELETE',
            slug: 'users/:id',
          },
          {
            label: 'Delete Current User',
            hash: 'delete-current-user',
            httpMethod: 'DELETE',
            slug: 'users/current',
            requiresAuth: true,
          },
        ],
      },
      {
        label: 'Authentication',
        slug: 'authentication',
        desc: 'Log in as a user to view their cart, wishlist, reviews, and purchases.',
        anchors: [
          {
            label: 'Sign Up',
            hash: 'sign-up',
            httpMethod: 'POST',
            slug: 'users/signup',
            body: loginBody,
            response: loginResponse,
            desc: 'This endpoint will not include a valid JWT to be used for subsequent requests as it would in a real-world application. This is because the new user is not actually persisted to the database. If you need a token to access protected endpoints, use the log in endpoint as described below.',
          },
          {
            label: 'Log In',
            hash: 'log-in',
            httpMethod: 'POST',
            slug: 'users/login',
            body: signupBody,
            response: signupResponse,
            desc: `In order to provide a variety in the data, there are multiple user accounts available. The structure of each user's email address is [firstName]@example.com, and each user's password is simply 'password'. You may log in as any of the following users: Jodi, Amy, Jean, Cody, or Daisy.`,
          },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    subitems: [
      {
        label: 'Postman Docs',
        slug: 'https://documenter.getpostman.com/view/12907395/UyxjF694',
        anchors: [],
      },
    ],
  },
];

export const getAllSubitems = (): StructureSubItem[] =>
  structure.map((item) => item.subitems).flat();

export const getSlugStructure = (slug: string) =>
  getAllSubitems().find((item) => item.slug === slug) as StructureSubItem;
