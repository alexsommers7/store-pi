import {
  addProductToCurrentUserCartBody,
  addOrRemoveProductToCurrentUserWishlistBody,
  createReviewBody,
  createPurchaseBody,
  loginBody,
  removeProductFromCurrentUserCartBody,
  signupBody,
  updateCurrentUserBody,
  updateReviewBody,
} from '@/_lib/api-samples/sample-bodies';
import {
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
  getUserResponse,
} from '@/_lib/api-samples/sample-responses';
import { StructureSubItem } from '@/_lib/types';

export const structure = [
  {
    label: 'Getting Started',
    subitems: [
      {
        label: 'Introduction',
        slug: 'introduction',
        isDBTable: false,
        desc: `A look at the purpose of this project and the technologies used, as well as the basics that you'll need to get started.`,
        anchors: [
          { label: 'Database Interaction', hash: 'database-interaction' },
          { label: 'CORS', hash: 'cors' },
          { label: 'Authorization', hash: 'authorization' },
          { label: 'Organizing Results', hash: 'organizing-results' },
          { label: 'Filtering Results', hash: 'filtering-results' },
          { label: 'PostgREST', hash: 'postgrest' },
          { label: 'GraphQL', hash: 'graphql' },
        ],
      },
      {
        label: 'Quick Start',
        slug: 'quick-start',
        isDBTable: false,
        desc: 'A quick glance at some common API calls to start with.',
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
            label: 'Get Product',
            hash: 'get-product',
            httpMethod: 'GET',
            slug: 'products/:id',
            response: getProductResponse,
          },
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
            label: 'Get All Brands',
            hash: 'get-brands',
            httpMethod: 'GET',
            slug: 'brands',
            response: getAllBrandsResponse,
          },
          {
            label: 'Get All Products in Brand',
            hash: 'get-brand-products',
            httpMethod: 'GET',
            slug: 'brands/:id/products',
            response: getAllProductsInCategoryResponse,
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
            slug: 'reviews',
            body: createReviewBody,
            response: createOrUpdateReviewResponse,
            requiresAuth: true,
            note: `A user may only add one review per product.`,
          },
          {
            label: 'Update Review',
            hash: 'update-review',
            httpMethod: 'PATCH',
            slug: 'reviews/:id',
            body: updateReviewBody,
            response: createOrUpdateReviewResponse,
            requiresAuth: true,
            note: `You may only update a review if you are the author of the review. If the review was part of the default dataset of this API, the update will not be persisted to the db but it will respond as if it were successful.`,
          },
          {
            label: 'Delete Review',
            hash: 'delete-review',
            httpMethod: 'DELETE',
            slug: 'reviews/:id',
            requiresAuth: true,
            note: `You may only delete a review if you are the author of the review. If the review was part of the default dataset of this API, the deletion will not be persisted to the db but it will respond as if it were successful.`,
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
            response: getCurrentUserCartResponse,
            requiresAuth: true,
            note: `If the product already exists in the cart, the quantity will be incremented by the quantity value passed in, defaulting to 1.`,
          },
          {
            label: 'Remove From Current User Cart',
            hash: 'remove-from-current-user-cart',
            httpMethod: 'PATCH',
            slug: 'users/current/cart',
            body: removeProductFromCurrentUserCartBody,
            response: getCurrentUserCartResponse,
            requiresAuth: true,
            note: `If the quantity was 1, the item will be removed from the cart.`,
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
            label: 'Get Purchase',
            hash: 'get-purchase',
            httpMethod: 'GET',
            slug: 'purchases/:id',
            response: getCurrentUserPurchaseResponse,
            requiresAuth: true,
            note: `You must be logged in as the owner of the purchase for this call to succeed.`,
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
            label: 'Get Current User Wishlist',
            hash: 'get-current-user-wishlist',
            httpMethod: 'GET',
            slug: 'users/current/wishlist',
            response: getCurrentUserWishlistResponse,
            requiresAuth: true,
            note: `A user may only have one wishlist.`,
          },
          {
            label: 'Add to Current User Wishlist',
            hash: 'add-to-current-user-wishlist',
            httpMethod: 'POST',
            slug: 'users/current/wishlist',
            body: addOrRemoveProductToCurrentUserWishlistBody,
            response: getCurrentUserWishlistResponse,
            requiresAuth: true,
          },
          {
            label: 'Remove From Current User Wishlist',
            hash: 'remove-from-current-user-wishlist',
            httpMethod: 'PATCH',
            slug: 'users/current/wishlist',
            body: addOrRemoveProductToCurrentUserWishlistBody,
            response: getCurrentUserWishlistResponse,
            requiresAuth: true,
          },
        ],
      },
      {
        label: 'Users',
        slug: 'users',
        isDBTable: false,
        desc: 'Each user object will contain general profile information, including a link to a stock photo hosted on S3.',
        anchors: [
          {
            label: 'Get User',
            hash: 'get-user',
            httpMethod: 'GET',
            slug: 'users/:id',
            response: getUserResponse,
            note: `This endpoint gives admin access to data on any user in the DB. It wouldn't typically be publicly exposed, but it's available for the purposes of this API.`,
          },
          {
            label: 'Get Current User',
            hash: 'get-current-user',
            httpMethod: 'GET',
            slug: 'users/current',
            response: getCurrentUserResponse,
            requiresAuth: true,
          },
          {
            label: 'Update Current User',
            hash: 'update-current-user',
            httpMethod: 'PATCH',
            slug: 'users/current',
            body: updateCurrentUserBody,
            response: updateCurrentUserResponse,
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
            label: 'Sign Up',
            hash: 'sign-up',
            httpMethod: 'POST',
            slug: 'signup',
            body: signupBody,
            response: signupResponse,
            desc: 'You may create a new user account with any email address and password, provided the email address does not already exist in the database. The new user will be persisted to the database and you may access user-specific resources with the new credentials. Upon successfully signing up, you will immediately be authenticated as the new user.',
          },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    subitems: [
      // {
      //   label: 'Demo',
      //   slug: `${
      //     process.env.NODE_ENV === 'development'
      //       ? 'http://localhost:3000'
      //       : 'https://storepi.vercel.app'
      //   }/demo`,
      //   anchors: [],
      // },
      {
        label: 'Open in Postman',
        slug: 'https://documenter.getpostman.com/view/12907395/UyxjF694',
        anchors: [],
      },
      {
        label: 'Postgrest Docs',
        slug: 'https://postgrest.org/en/stable/index.html',
        anchors: [],
      },
      {
        label: 'pg_graphql Docs',
        slug: 'https://supabase.github.io/pg_graphql/supabase/#http-request',
        anchors: [],
      },
    ],
  },
];

export const getAllSubitems = (): StructureSubItem[] =>
  structure.map((item) => item.subitems).flat();

export const getSlugStructure = (slug: string) =>
  getAllSubitems().find((item) => item.slug === slug) as StructureSubItem;
