export const authorizedRequestHeader = `headers: {
  Authorization: "Bearer {your access token}"
}`;

export const createReviewBody = `// all fields are required except for 'recommends'
"product_id": 1,
"content": "...",
"rating": 5,
"recommends": true // if this isn't provided, defaults to true for ratings >= 3, false otherwise
`;

export const updateReviewBody = `"content": "...",
"rating": 5,
"recommends": true
`;

export const addProductToCurrentUserCartBody = `"product_id": 1, // required
"quantity": 2 // optional, defaults to 1
`;

export const removeProductFromCurrentUserCartBody = `"product_id": 16, // required
"remove": true // optional, defaults to false. If false, quantity is reduced by 1. If true, item is removed from cart
`;

export const createPurchaseBody = `"products": [
  {
    "product_id": 1, // required
    "quantity": 2 // optional, defaults to 1
  },
]
`;

export const addOrRemoveProductToCurrentUserWishlistBody = `"product_id": 3 // required`;

export const updateCurrentUserBody = `"name": "...",
  "photo": "..."
`;

export const signupBody = `"name": "...",
"email": "...",
"password": "...",
"photo": "..." // optional, defaults to generic avatar
`;

export const loginBody = `"email": "candace@example.com",
"password": "password" // same for all users in the default dataset
`;
