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
    "fragment ProductBase on Product {\n  id\n  name\n  price\n  description\n  categories(first: 1) {\n    name\n  }\n}\n\nfragment ProductListItem on Product {\n  ...ProductBase\n  images(first: 1) {\n    url\n  }\n}\n\nfragment ProductDetails on Product {\n  ...ProductBase\n  images(first: 3) {\n    url\n  }\n}": types.ProductBaseFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  products(first: 10, where: {categories_some: {slug: $slug}}) {\n    name\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductBase on Product {\n  id\n  name\n  price\n  description\n  categories(first: 1) {\n    name\n  }\n}\n\nfragment ProductListItem on Product {\n  ...ProductBase\n  images(first: 1) {\n    url\n  }\n}\n\nfragment ProductDetails on Product {\n  ...ProductBase\n  images(first: 3) {\n    url\n  }\n}"): typeof import('./graphql').ProductBaseFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  products(first: 10, where: {categories_some: {slug: $slug}}) {\n    name\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
