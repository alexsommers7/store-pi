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

export const createOrUpdateReviewBody = `// all fields are required
"review": "...",
"rating": 5
`;

export const addProductToCurrentUserCartBody = `// all fields are required
"sku": 1,
"quantity": 1
`;

export const removeProductFromCurrentUserCartBody = `// all fields are required
"product_id": 16
`;

export const createPurchaseBody = `// all fields are required
"products": [
  {
    "product_id": 1,
    "quantity": 1
  }
]
`;

export const addProductToCurrentUserWishlistBody = `// all fields are required
"product_id": 3
`;

export const removeProductFromCurrentUserWishlistBody = `// all fields are required
"product_id": 1
`;

export const updateCurrentUserBody = `"name": "..."`;

export const signupBody = `// all fields are required with the exception of photo
"name": "...",
"email": "...",
"password": "...",
"photo": "..."
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
      sale_price
    }
  }
\`;
  
const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
  variables: {
    limit: 10,
    sort: 'sku',
    filter: 'sale_price[gte]=100',
  },
});
`;
