# StorePI

StorePI is a free, open-source API that was created for use in e-commerce prototyping, Front-End Developer talent evaluations, and anything else you can think of.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/12907395-876b1330-5f7c-4897-ab79-0603acc76801?action=collection%2Ffork&collection-url=entityId%3D12907395-876b1330-5f7c-4897-ab79-0603acc76801%26entityType%3Dcollection%26workspaceId%3D526243f7-f864-4c95-a9d4-92825249cad6#?env%5BProd%3A%20StorePI%5D=W3sia2V5IjoiVVJMIiwidmFsdWUiOiJodHRwczovL3N0b3JlcGkuaGVyb2t1YXBwLmNvbSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJwYXNzd29yZCIsInZhbHVlIjoicGFzc3dvcmQiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCJ9LHsia2V5Ijoiand0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiYW55In1d)

🔗 **[Full Documentation](https://storepi.herokuapp.com)**

## Resources

- Products
- Categories
- Reviews
- Users
- Carts
- Purchases
- Wishlist
- JWT Authentication

## Database Interaction

All endpoints act as real-world endpoints, but without actually writing anything to the database. In the event that you are creating or updating a resource, the response will still contain the updated data despite not persisting it.

## CORS

Cross-origin resource sharing is enabled for all incoming requests.

## Authorization

Certain requests require a JWT for authorization. Requests that do require the token are indicated as such by the icon. As a general rule, any REST or GraphQL request that is reading or writing to a current user's resources will require the bearer token.

For REST calls, a token can be obtained via the log in endpoint. For GraphQL calls, you can obtain a token via the login mutation. In both situations, the token will be returned in the response body and will be valid for 90 days.

## GraphQL

StorePI includes a GraphQL API powered by Apollo Server, offering compatibility with any GraphQL client, including the popular Apollo Client.

Every request has its equivalent GraphQL query/mutation accessible at https://storepi.herokuapp.com/graphql. You may pass in the same query parameters as REST calls, with the exception of fields.

To explore and test all available queries and mutations, visit the [Apollo Sandbox](https://studio.apollographql.com/sandbox/explorer/?endpoint=https://storepi.herokuapp.com/graphql).

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

Copyright (c) 2022 Alex Sommers

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
