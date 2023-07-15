export const authorizedRequestHeader = `headers: {
  Authorization: "Bearer {your access token}"
}`;

export const graphqlLogin = `// Example using React and Apollo Client
const LOGIN = gql\`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
\`;
  
const { loading, error, data } = useQuery(LOGIN, {
  variables: {
    email: "jean@example.com",
    password: "password"
  },
});`;

export const createNewProductBody = `// all fields are required
"sku": 1234,
"name": "...",
"category": "6213d49cb7f67e0d64774e92",
"brand": "...",
"regular_price": 99.95,
"sale_price": 79.95,
"description": "..."
`;

export const updateProductBody = `"regular_price": 159.95
"sale_price": 139.95
`;

export const createOrUpdateReviewBody = `// all fields are required
"review": "...",
"rating": 5
`;

export const createOrUpdateCategoryBody = `// all fields are required
"name": "..."
`;

export const addProductToCurrentUserCartBody = `// all fields are required
"sku": 1,
"quantity": 1
`;

export const removeProductFromCurrentUserCartBody = `// all fields are required
"sku": 16
`;

export const createPurchaseBody = `// all fields are required
"products": [
  {
    "item": "6213d55cf8b9765ec0fbbcaa",
    "quantity": 1
  }
]
`;

export const addProductToCurrentUserWishlistBody = `// all fields are required
"sku": 3
`;

export const removeProductFromCurrentUserWishlistBody = `// all fields are required
"sku": 1
`;

export const updateCurrentUserBody = `"name": "..."`;

export const signupBody = `// all fields are required
"name": "...",
"email": "...",
"password": "...",
"passwordConfirm": "..."
`;

export const loginBody = `// all fields are required	
"email": "amy@example.com",
"password": "password"
`;

export const graphqlQuery = `const GET_ALL_PRODUCTS = gql\`
  query getAllProducts($limit: Int, $sort: String, $filter: String) {
    products(limit: $limit, sort: $sort, filter: $filter) {
      id
      sku
      reviews_average
      reviews_quantity
      image_main
    }
  }
\`;
  
const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
  variables: {
    limit: 10,
    sort: '-reviews_average,sku',
    filter: 'reviews_average[gte]=5,reviews_quantity[gte]=5',
  },
});
`;
