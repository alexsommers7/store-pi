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

export const createReviewBody = `// all fields are required except for 'recommends'
"product_id: 1,
"content": "...",
"rating": 5,
"recommends": true // if this isn't provided, defaults to true for ratings >= 3, false otherwise
`;

export const updateReviewBody = `// all fields are required except for 'recommends'
"content": "...",
"rating": 5,
"recommends": true
`;

export const addProductToCurrentUserCartBody = `// all fields are required
"sku": 1,
"quantity": 2 // optional, defaults to 1
`;

export const removeProductFromCurrentUserCartBody = `// all fields are required
"product_id": 16,
"remove": true // optional, defaults to false. If false, quantity is reduced by 1. If true, item is removed from cart
`;

export const createPurchaseBody = `// all fields are required
"products": [
  {
    "product_id": 1,
    "quantity": 1
  }
]
`;

export const addOrRemoveProductToCurrentUserWishlistBody = `// all fields are required
"product_id": 3
`;

export const updateCurrentUserBody = `"data": {
  "name": "...",
  "photo": "..."
},
"password": "..."
`;

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
