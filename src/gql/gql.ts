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
    "query CollectionGetList($first: Int!, $skip: Int!) {\n  collections(first: $first, skip: $skip) {\n    ...CollectionListItem\n  }\n  collectionsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.CollectionGetListDocument,
    "query ProductsGetByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {\n  products(first: $first, skip: $skip, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n  categories(where: {slug: $slug}, first: 1) {\n    name\n  }\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($first: Int!, $skip: Int!, $slug: String!) {\n  products(first: $first, skip: $skip, where: {collections_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n  collections(where: {slug: $slug}) {\n    name\n  }\n  productsConnection(where: {collections_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetByQuery($query: String!, $skip: Int!, $first: Int!) {\n  products(where: {name_contains: $query}, skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n  productsConnection(where: {name_contains: $query}, skip: $skip, first: $first) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductGetByQueryDocument,
    "query ProductsGetList($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment CollectionListItem on Collection {\n  name\n  slug\n  description\n  image {\n    url\n    width\n    height\n  }\n}": types.CollectionListItemFragmentDoc,
    "fragment ProductBase on Product {\n  id\n  name\n  price\n  description\n  categories(first: 1) {\n    name\n  }\n}\n\nfragment ProductListItem on Product {\n  ...ProductBase\n  images(first: 1) {\n    url\n    width\n    height\n  }\n}\n\nfragment ProductDetails on Product {\n  ...ProductBase\n  collections(first: 1) {\n    slug\n  }\n  images(first: 3) {\n    url\n    width\n    height\n  }\n}": types.ProductBaseFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList($first: Int!, $skip: Int!) {\n  collections(first: $first, skip: $skip) {\n    ...CollectionListItem\n  }\n  collectionsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {\n  products(first: $first, skip: $skip, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n  categories(where: {slug: $slug}, first: 1) {\n    name\n  }\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($first: Int!, $skip: Int!, $slug: String!) {\n  products(first: $first, skip: $skip, where: {collections_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n  collections(where: {slug: $slug}) {\n    name\n  }\n  productsConnection(where: {collections_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByQuery($query: String!, $skip: Int!, $first: Int!) {\n  products(where: {name_contains: $query}, skip: $skip, first: $first) {\n    ...ProductListItem\n  }\n  productsConnection(where: {name_contains: $query}, skip: $skip, first: $first) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductGetByQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  name\n  slug\n  description\n  image {\n    url\n    width\n    height\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductBase on Product {\n  id\n  name\n  price\n  description\n  categories(first: 1) {\n    name\n  }\n}\n\nfragment ProductListItem on Product {\n  ...ProductBase\n  images(first: 1) {\n    url\n    width\n    height\n  }\n}\n\nfragment ProductDetails on Product {\n  ...ProductBase\n  collections(first: 1) {\n    slug\n  }\n  images(first: 3) {\n    url\n    width\n    height\n  }\n}"): typeof import('./graphql').ProductBaseFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
