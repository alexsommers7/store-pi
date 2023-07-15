export interface StructureItem {
  label: string;
  subitems: StructureSubItem[];
}

export interface StructureSubItem {
  label: string;
  slug: string;
  anchors: SubItemAnchor[];
}

interface SubItemAnchor {
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

  // TODO: populate anchor arrays from here on out
  {
    label: 'Data Models',
    subitems: [
      { label: 'Products', slug: 'products', anchors: [] },
      { label: 'Reviews', slug: 'reviews', anchors: [] },
      { label: 'Brands', slug: 'brands', anchors: [] },
      { label: 'Categories', slug: 'categories', anchors: [] },
      { label: 'Carts', slug: 'carts', anchors: [] },
      { label: 'Purchases', slug: 'purchases', anchors: [] },
      { label: 'Wishlists', slug: 'wishlists', anchors: [] },
      { label: 'Users', slug: 'users', anchors: [] },
      { label: 'Authentication', slug: 'authentication', anchors: [] },
    ],
  },
  {
    label: 'Developer Resources',
    subitems: [
      { label: 'Contributing', slug: 'contributing', anchors: [] },
      { label: 'Postman', slug: 'postman', anchors: [] },
      { label: 'GraphQL Playground', slug: 'graphql-playground', anchors: [] },
    ],
  },
];
