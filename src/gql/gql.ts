/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartCreate($items: [OrderItemInput!]!) {\n  orderCreate(items: $items) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(id: $id, where: {status: DRAFT}) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "query CartGetDetailsById($id: ID!) {\n  order(id: $id, where: {status: DRAFT}) {\n    ...CartDetails\n  }\n}": types.CartGetDetailsByIdDocument,
    "query CartGetTotalItemsById($id: ID!) {\n  order(id: $id, where: {status: DRAFT}) {\n    totalItems\n  }\n}": types.CartGetTotalItemsByIdDocument,
    "mutation CartIncrementItems($id: ID!, $items: [OrderItemInput!]!) {\n  orderItemsUpdate(id: $id, items: $items, updateMethod: INCREMENT) {\n    ...Cart\n  }\n}": types.CartIncrementItemsDocument,
    "mutation CartUpdate($id: ID!, $items: [OrderItemInput!]!) {\n  orderItemsUpdate(id: $id, items: $items, updateMethod: SET) {\n    ...CartDetails\n  }\n}": types.CartUpdateDocument,
    "query CollectionGetList($first: Int!, $skip: Int!) {\n  collections(first: $first, skip: $skip) {\n    ...CollectionListItem\n  }\n  collectionsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.CollectionGetListDocument,
    "mutation OrderItemUpdate($id: ID!, $quantity: Int!) {\n  orderItemUpdate(id: $id, quantity: $quantity) {\n    id\n  }\n}": types.OrderItemUpdateDocument,
    "query ProductsGetByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {\n  products(first: $first, skip: $skip, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n  categories(where: {slug: $slug}, first: 1) {\n    name\n  }\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($first: Int!, $skip: Int!, $slug: String!, $excludedIds: [ID!]) {\n  products(\n    first: $first\n    skip: $skip\n    where: {collections_some: {slug: $slug}, excludedIds: $excludedIds}\n  ) {\n    ...ProductListItem\n  }\n  collections(where: {slug: $slug}) {\n    name\n  }\n  productsConnection(\n    where: {collections_some: {slug: $slug}, excludedIds: $excludedIds}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetByQuery($query: String!, $skip: Int!, $first: Int!) {\n  products(where: {nameContains: $query}, skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n  productsConnection(where: {nameContains: $query}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductGetByQueryDocument,
    "query ProductsGetList($first: Int!, $skip: Int!, $orderBy: OrderByInput) {\n  products(first: $first, skip: $skip, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment Cart on Order {\n  id\n}\n\nfragment CartDetails on Order {\n  ...Cart\n  items {\n    ...OrderItem\n  }\n  totalItems\n}": types.CartFragmentDoc,
    "fragment CollectionListItem on Collection {\n  name\n  slug\n  description\n  images(first: 1) {\n    url\n    width\n    height\n  }\n}": types.CollectionListItemFragmentDoc,
    "fragment OrderItem on OrderItem {\n  id\n  name\n  price\n  quantity\n  variantName\n}": types.OrderItemFragmentDoc,
    "fragment ProductBase on Product {\n  id\n  name\n  price\n  description\n  averageRating\n  categories(first: 1) {\n    name\n  }\n}\n\nfragment ProductListItem on Product {\n  ...ProductBase\n  images(first: 1) {\n    url\n    width\n    height\n  }\n}\n\nfragment ProductDetails on Product {\n  ...ProductBase\n  collections(first: 1) {\n    slug\n  }\n  images(first: 3) {\n    url\n    width\n    height\n  }\n  variants {\n    id\n    name\n  }\n}": types.ProductBaseFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($items: [OrderItemInput!]!) {\n  orderCreate(items: $items) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(id: $id, where: {status: DRAFT}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetDetailsById($id: ID!) {\n  order(id: $id, where: {status: DRAFT}) {\n    ...CartDetails\n  }\n}"): typeof import('./graphql').CartGetDetailsByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetTotalItemsById($id: ID!) {\n  order(id: $id, where: {status: DRAFT}) {\n    totalItems\n  }\n}"): typeof import('./graphql').CartGetTotalItemsByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartIncrementItems($id: ID!, $items: [OrderItemInput!]!) {\n  orderItemsUpdate(id: $id, items: $items, updateMethod: INCREMENT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartIncrementItemsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartUpdate($id: ID!, $items: [OrderItemInput!]!) {\n  orderItemsUpdate(id: $id, items: $items, updateMethod: SET) {\n    ...CartDetails\n  }\n}"): typeof import('./graphql').CartUpdateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList($first: Int!, $skip: Int!) {\n  collections(first: $first, skip: $skip) {\n    ...CollectionListItem\n  }\n  collectionsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderItemUpdate($id: ID!, $quantity: Int!) {\n  orderItemUpdate(id: $id, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').OrderItemUpdateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {\n  products(first: $first, skip: $skip, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n  categories(where: {slug: $slug}, first: 1) {\n    name\n  }\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($first: Int!, $skip: Int!, $slug: String!, $excludedIds: [ID!]) {\n  products(\n    first: $first\n    skip: $skip\n    where: {collections_some: {slug: $slug}, excludedIds: $excludedIds}\n  ) {\n    ...ProductListItem\n  }\n  collections(where: {slug: $slug}) {\n    name\n  }\n  productsConnection(\n    where: {collections_some: {slug: $slug}, excludedIds: $excludedIds}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByQuery($query: String!, $skip: Int!, $first: Int!) {\n  products(where: {nameContains: $query}, skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n  productsConnection(where: {nameContains: $query}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductGetByQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int!, $skip: Int!, $orderBy: OrderByInput) {\n  products(first: $first, skip: $skip, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n}\n\nfragment CartDetails on Order {\n  ...Cart\n  items {\n    ...OrderItem\n  }\n  totalItems\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  name\n  slug\n  description\n  images(first: 1) {\n    url\n    width\n    height\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment OrderItem on OrderItem {\n  id\n  name\n  price\n  quantity\n  variantName\n}"): typeof import('./graphql').OrderItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductBase on Product {\n  id\n  name\n  price\n  description\n  averageRating\n  categories(first: 1) {\n    name\n  }\n}\n\nfragment ProductListItem on Product {\n  ...ProductBase\n  images(first: 1) {\n    url\n    width\n    height\n  }\n}\n\nfragment ProductDetails on Product {\n  ...ProductBase\n  collections(first: 1) {\n    slug\n  }\n  images(first: 3) {\n    url\n    width\n    height\n  }\n  variants {\n    id\n    name\n  }\n}"): typeof import('./graphql').ProductBaseFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
