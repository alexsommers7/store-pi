import { HTTPMethods } from '@/_lib/constants';
import {
  addProductToCurrentUserCartBody,
  addProductToCurrentUserWishlistBody,
  createOrUpdateReviewBody,
  createPurchaseBody,
  loginBody,
  removeProductFromCurrentUserCartBody,
  removeProductFromCurrentUserWishlistBody,
  signupBody,
  updateCurrentUserBody,
} from '@/_lib/api-samples/sample-bodies';
import {
  addProductToCurrentUserCartResponse,
  addProductToCurrentUserWishlistResponse,
  createOrUpdateReviewResponse,
  createPurchaseResponse,
  getAllBrandsResponse,
  getAllCategoriesResponse,
  getAllProductsInCategoryResponse,
  getAllProductsResponse,
  getAllReviewsResponse,
  getCurrentUserCartResponse,
  getCurrentUserPurchasesResponse,
  getCurrentUserReviewsResponse,
  getCurrentUserWishlistResponse,
  getProductResponse,
  getProductReviewsResponse,
  getCurrentUserPurchaseResponse,
  getReviewResponse,
  getCurrentUserResponse,
  loginResponse,
  signupResponse,
  updateCurrentUserResponse,
} from '@/_lib/api-samples/sample-responses';

export interface StructureItem {
  label: string;
  subitems: StructureSubItem[];
}

export interface StructureSubItem {
  label: string;
  slug: string;
  desc?: string;
  isDBTable?: boolean;
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
  tip?: string;
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
        isDBTable: false,
        desc: 'A look at the purpose of this project and the technologies used.',
        anchors: [
          { label: 'Database Interaction', hash: 'database-interaction' },
          { label: 'CORS', hash: 'cors' },
          { label: 'Authorization', hash: 'authorization' },
          { label: 'Organizing Results', hash: 'organizing-results' },
          { label: 'Filtering Results', hash: 'filtering-results' },
          { label: 'GraphQL', hash: 'graphql' },
        ],
      },
      {
        label: 'Quick Start',
        slug: 'quick-start',
        isDBTable: false,
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
        isDBTable: true,
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
            label: 'Get All Products in Category',
            hash: 'get-category-products',
            httpMethod: 'GET',
            slug: 'categories/:id/products',
            response: getAllProductsInCategoryResponse,
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
        ],
      },
      {
        label: 'Reviews',
        slug: 'reviews',
        isDBTable: true,
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
        isDBTable: true,
        desc: 'There are six common e-commerce product categories available, each with multiple items belonging to it.',
        anchors: [
          {
            label: 'Get All Categories',
            hash: 'get-categories',
            httpMethod: 'GET',
            slug: 'categories',
            response: getAllCategoriesResponse,
          },
        ],
      },
      {
        label: 'Carts',
        slug: 'carts',
        isDBTable: true,
        desc: 'Each user has a cart associated with them. The cart will contain a products array, the cart total (string and numeric), and more. A cart must belong to a user.',
        anchors: [
          {
            label: 'Get Current User Cart',
            hash: 'get-current-user-cart',
            httpMethod: 'GET',
            slug: 'users/current/carts',
            response: getCurrentUserCartResponse,
            requiresAuth: true,
          },
          {
            label: 'Add to Current User Cart',
            hash: 'add-to-current-user-cart',
            httpMethod: 'POST',
            slug: 'users/current/carts',
            body: addProductToCurrentUserCartBody,
            response: addProductToCurrentUserCartResponse,
            requiresAuth: true,
          },
          {
            label: 'Remove From Current User Cart',
            hash: 'remove-from-current-user-cart',
            httpMethod: 'DELETE',
            slug: 'users/current/carts',
            body: removeProductFromCurrentUserCartBody,
            requiresAuth: true,
          },
        ],
      },
      {
        label: 'Purchases',
        slug: 'purchases',
        isDBTable: true,
        desc: 'A total of 50 purchases exist in the database. Each purchase must belong to a user. Not every user has made a purchase, but some have made multiple.',
        anchors: [
          {
            label: 'Get Current User Purchase',
            hash: 'get-current-user-purchase',
            httpMethod: 'GET',
            slug: 'purchases/:id',
            response: getCurrentUserPurchaseResponse,
            requiresAuth: true,
          },
          {
            label: 'Get Current User Purchases',
            hash: 'get-current-user-purchases',
            httpMethod: 'GET',
            slug: 'purchases',
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
        isDBTable: true,
        desc: 'Every user is assigned a wishlist. Some will have an empty wishlist, while others will have products in theirs. A user may only have one wishlist.',
        anchors: [
          {
            label: 'Get Current User WIshlist',
            hash: 'get-current-user-wishlist',
            httpMethod: 'GET',
            slug: 'users/current/wishlists',
            response: getCurrentUserWishlistResponse,
            requiresAuth: true,
          },
          {
            label: 'Add to Current User Wishlist',
            hash: 'add-to-current-user-wishlist',
            httpMethod: 'POST',
            slug: 'users/current/wishlists',
            body: addProductToCurrentUserWishlistBody,
            response: addProductToCurrentUserWishlistResponse,
            requiresAuth: true,
          },
          {
            label: 'Remove From Current User Wishlist',
            hash: 'remove-from-current-user-wishlist',
            httpMethod: 'DELETE',
            slug: 'users/current/wishlists',
            body: removeProductFromCurrentUserWishlistBody,
            requiresAuth: true,
          },
        ],
      },
      {
        label: 'Users',
        slug: 'users',
        isDBTable: true,
        desc: 'Each user object will contain general profile information, including a link to a stock photo hosted on S3.',
        anchors: [
          {
            label: 'Get Current User',
            hash: 'get-current-user',
            httpMethod: 'GET',
            slug: 'users/current',
            response: getCurrentUserResponse,
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
        isDBTable: false,
        desc: 'Log in as an existing user to view their cart, wishlist, reviews, and purchases. You may also create a new account.',
        anchors: [
          {
            label: 'Log In',
            hash: 'log-in',
            httpMethod: 'POST',
            slug: 'login',
            body: loginBody,
            response: loginResponse,
            desc: `In order to provide a variety in the data, there are multiple user accounts available. The structure of each user's email address is [firstName]@example.com, and each user's password is simply 'password'. You may log in as any of the following users: Jodi, Amy, Jean, Cody, or Daisy.`,
          },
          {
            label: 'Log Out',
            hash: 'log-out',
            httpMethod: 'POST',
            slug: 'logout',
            requiresAuth: true,
            desc: 'Inside a browser context, this endpoint will remove the logged in user from the browser session and log them out - removing all items from Local Storage.',
          },
          {
            label: 'Sign Up',
            hash: 'sign-up',
            httpMethod: 'POST',
            slug: 'signup',
            body: signupBody,
            response: signupResponse,
            desc: 'You may create a new user account with any email address and password, provided the email address does not already exist in the database. The new user will be persisted to the database and you may access user-specific resources with the new credentials. Upon successfully signing up, you will immediately be authenticated as the new user.',
            tip: `Providing a photo is optional. If you would like to provide one, it must be self-hosted. If you don't provide one, a generic default will be assigned.`,
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
