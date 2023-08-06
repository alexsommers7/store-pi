import { HTTPMethods } from '@/_lib/constants';

export interface Context {
  params: {
    [key: string]: string;
  };
}

export interface PaginationSlug {
  label: string;
  slug: string;
}

export interface Map {
  [key: string]: string;
}

export interface INavLink {
  name: string;
  href: string;
  bold?: boolean;
  addSidebarAccent?: boolean;
  forceActive?: boolean;
  target?: string;
}

export interface IOnThisPageLink {
  name: string;
  href: string;
}

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
  note?: string;
}

export interface NonEndpointAnchor {
  label: string;
  hash: string;
}

export interface Product {
  product_id: number;
  quantity: number;
}
