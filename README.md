# StorePI

StorePI is a free, open-source API that was created for use in e-commerce prototyping, Front-End Developer talent evaluations, and anything else you can think of. The API and accompanying documentation was built with Next.js, Typescript, Tailwind CSS, Supabase, and Vercel.

It provides resources such as products, reviews, users, carts, purchases, and more. Endpoints are provided to perform CRUD operations on each of these resources, both as an anonymous user and as an authenticated user.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/12907395-876b1330-5f7c-4897-ab79-0603acc76801?action=collection%2Ffork&collection-url=entityId%3D12907395-876b1330-5f7c-4897-ab79-0603acc76801%26entityType%3Dcollection%26workspaceId%3D526243f7-f864-4c95-a9d4-92825249cad6#?env%5BProd%3A%20StorePI%5D=W3sia2V5IjoiVVJMIiwidmFsdWUiOiJodHRwczovL3N0b3JlcGkuaGVyb2t1YXBwLmNvbSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJwYXNzd29yZCIsInZhbHVlIjoicGFzc3dvcmQiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCJ9LHsia2V5Ijoiand0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiYW55In1d)

🔗 **[Full Documentation](https://storepi.vercel.app)**

🔗 **[Demo](https://demo-storepi.netlify.app/)**

## Database Interaction

A default dataset is provided with this API. It consists of 19 users (each with a cart and wishlist), 50 products, 6 categories, 44 brands, 160 product reviews, and 50 purchases.

That said, you do have the ability to interact with the database and persist your custom data with select resources. Notably, You may sign up as a new user and perform any of the following actions as your new user:

- Log in
- Modify your profile
- Create/edit reviews
- Add/remove cart items
- Add/remove wishlist items
- Create a new purchase

While creating your own user is recommended, you may also perform any of the above actions as one of the users from the original dataset. When doing so, the endpoint will still respond as if the request were successful, but your data will not be persisted. See logging in for information on how to authenticate as one of these users.

## CORS

Cross-origin resource sharing is enabled for all incoming requests.

## Authorization

Certain requests require a JWT for authorization. Requests that do require the token are indicated as such by the lock icon. As a general rule, any request that is reading or writing to a current user's resources will require the bearer token:

```
headers: {
  Authorization: "Bearer {your access token}"
}
```

> A bearer token can be obtained via the `/login` endpoint, where it will be returned in the request body and be valid for 12 hours.

## Organizing Results

The following query parameters can optionally be appended to all `GET` requests.

| Parameter | Description                                                                                           | Example                            |
| --------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `sort`    | Sort the query results by one or more fields (comma-delimited). Use `-` to indicate descending order. | `?sort=-sale_price,-regular_price` |
| `fields`  | Filter the query results to one or more specific fields (comma-delimited).                            | `?fields=name,sale_price`          |
| `limit`   | Limit the query results. Defaults to `20`.                                                            | `?limit=10`                        |
| `offset`  | Paginate the query results. Defaults to `0`.                                                          | `?offset=2`                        |

> If the `limit` or `offset` parameter is passed, the response json will contain a `nextOffset` value if not already at the end.

## Filtering Results

All fields of a given resource are valid for applying filters to a query. A full list of these fields can be found on each resource's page. The following operators are supported for `GET` requests:

| Parameter                          | Description                                                         | Example                                    |
| ---------------------------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| `[field]=[value]`                  | Standard equality - the value must match the field's value exactly. | `?in_stock=true`                           |
| `[field]_greater_than`             | The value must be greater than the field's value.                   | `?sale_price_greater_than=100`             |
| `[field]_greater_than_or_equal_to` | The value must be greater than or equal to the field's value.       | `?sale_price_greater_than_or_equal_to=100` |
| `[field]_less_than`                | The value must be less than the field's value.                      | `?sale_price_less_than=200`                |
| `[field]_less_than_or_equal_to`    | The value must be less than or equal to the field's value.          | `?sale_price_less_than_or_equal_to=200`    |
| `[field]=[value1],[value2]`        | Check if the field's value is equal to any of the given values.     | `?category_id=1,2`                         |

## PostgREST

Under the hood, StorePI makes use of [PostgREST](https://postgrest.org/en/v7.0.0/) to provide an intuitive REST API. However, if you prefer to skip a layer and access the data using their syntax, you can do so by making use of the following variables:

| Variable      | Value                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `PROJECT_REF` | `wkzyrrbzyyljtvkayjyn`                                                                                                                                                                                             |
| `API_KEY`     | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrenlycmJ6eXlsanR2a2F5anluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4MjM5NTYsImV4cCI6MjAwNTM5OTk1Nn0.dxSC_1fFOHxE5xPLfQTuzp5raKuPjoE1a9ab6vZn8KY` |

## GraphQL

Also thanks to its reliance on Supabase, StorePI comes with [pg_graphql](https://supabase.github.io/pg_graphql/supabase/#http-request) - a PostgreSQL extension that enables querying the database with GraphQL using a single SQL function. Reference the variables in the [PostgREST section](http://storepi.vercel.app/docs/introduction#postgrest) to get started.

> You may also download the [GraphiQL snippet](https://github.com/alexsommers7/store-pi/blob/380469b6f5ae93b358a72b1d31e8e415a64e11cd/public/supabase_graphiql.html) to explore the GraphQL schema in-browser

### Prerequisites

Node v16.14.0

### Installs dependencies, compiles, and hot-reloads for development

```
npm run dev
```

### Installs dependencies, compiles, and hot-reloads server

```
npm run dev:server
```

### Installs dependencies, compiles, and hot-reloads client

```
npm run dev:client
```

## License

MIT License

Copyright (c) 2023 Alex Sommers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
