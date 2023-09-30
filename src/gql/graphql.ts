/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
};

export type Aggregate = {
  count: Scalars['Int']['output'];
};

export type Category = {
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Maybe<Product>>>;
  slug?: Maybe<Scalars['String']['output']>;
};


export type CategoryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CategorySomeInput = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryWhereInput = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Image>;
  name: Scalars['String']['output'];
  products: Array<Maybe<Product>>;
  slug: Scalars['String']['output'];
};


export type CollectionImagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CollectionProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionSomeInput = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionWhereInput = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Connection = {
  aggregate: Aggregate;
};

export type Image = {
  height: Scalars['Int']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type Mutation = {
  cartCreate?: Maybe<Order>;
  cartIncrement?: Maybe<Order>;
  cartUpdate?: Maybe<Order>;
};


export type MutationCartCreateArgs = {
  items: Array<OrderProductInput>;
};


export type MutationCartIncrementArgs = {
  id: Scalars['ID']['input'];
  items: Array<OrderProductInput>;
};


export type MutationCartUpdateArgs = {
  id: Scalars['ID']['input'];
  items: Array<OrderProductInput>;
};

export type Order = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  items: Array<OrderItem>;
  status: OrderStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderItemsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderItem = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  variantId: Scalars['ID']['output'];
};

export type OrderProductInput = {
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  variantId: Scalars['ID']['input'];
};

export enum OrderStatus {
  Draft = 'DRAFT',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type Product = {
  categories: Array<Maybe<Category>>;
  collections: Array<Maybe<Collection>>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Maybe<Image>>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  variants: Array<Variant>;
};


export type ProductCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductCollectionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductImagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductWhereInput = {
  categories_some?: InputMaybe<CategorySomeInput>;
  collections_some?: InputMaybe<CollectionSomeInput>;
  excludedIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  nameContains?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  cart?: Maybe<Order>;
  categories: Array<Category>;
  categoriesConnection: Connection;
  category?: Maybe<Category>;
  collections: Array<Maybe<Collection>>;
  collectionsConnection: Connection;
  product?: Maybe<Product>;
  products: Array<Product>;
  productsConnection: Connection;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoriesConnectionArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryCollectionsConnectionArgs = {
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type Variant = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type CollectionGetListQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type CollectionGetListQuery = { collections: Array<{ name: string, slug: string, description: string, images: Array<{ url: string, width: number, height: number }> } | null>, collectionsConnection: { aggregate: { count: number } } };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCategorySlugQuery = { products: Array<{ id: string, name: string, price: number, description: string, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> }>, categories: Array<{ name?: string | null }>, productsConnection: { aggregate: { count: number } } };

export type ProductsGetByCollectionSlugQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
  excludedIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type ProductsGetByCollectionSlugQuery = { products: Array<{ id: string, name: string, price: number, description: string, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> }>, collections: Array<{ name: string } | null>, productsConnection: { aggregate: { count: number } } };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, price: number, description: string, collections: Array<{ slug: string } | null>, images: Array<{ url: string, width: number, height: number } | null>, variants: Array<{ id: string, name: string }>, categories: Array<{ name?: string | null } | null> } | null };

export type ProductGetByQueryQueryVariables = Exact<{
  query: Scalars['String']['input'];
  skip: Scalars['Int']['input'];
  first: Scalars['Int']['input'];
}>;


export type ProductGetByQueryQuery = { products: Array<{ id: string, name: string, price: number, description: string, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> }>, productsConnection: { aggregate: { count: number } } };

export type ProductsGetListQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type ProductsGetListQuery = { products: Array<{ id: string, name: string, price: number, description: string, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> }>, productsConnection: { aggregate: { count: number } } };

export type CollectionListItemFragment = { name: string, slug: string, description: string, images: Array<{ url: string, width: number, height: number }> };

export type ProductBaseFragment = { id: string, name: string, price: number, description: string, categories: Array<{ name?: string | null } | null> };

export type ProductListItemFragment = { id: string, name: string, price: number, description: string, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> };

export type ProductDetailsFragment = { id: string, name: string, price: number, description: string, collections: Array<{ slug: string } | null>, images: Array<{ url: string, width: number, height: number } | null>, variants: Array<{ id: string, name: string }>, categories: Array<{ name?: string | null } | null> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CollectionListItemFragmentDoc = new TypedDocumentString(`
    fragment CollectionListItem on Collection {
  name
  slug
  description
  images(first: 1) {
    url
    width
    height
  }
}
    `, {"fragmentName":"CollectionListItem"}) as unknown as TypedDocumentString<CollectionListItemFragment, unknown>;
export const ProductBaseFragmentDoc = new TypedDocumentString(`
    fragment ProductBase on Product {
  id
  name
  price
  description
  categories(first: 1) {
    name
  }
}
    `, {"fragmentName":"ProductBase"}) as unknown as TypedDocumentString<ProductBaseFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  ...ProductBase
  images(first: 1) {
    url
    width
    height
  }
}
    fragment ProductBase on Product {
  id
  name
  price
  description
  categories(first: 1) {
    name
  }
}`, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ProductDetailsFragmentDoc = new TypedDocumentString(`
    fragment ProductDetails on Product {
  ...ProductBase
  collections(first: 1) {
    slug
  }
  images(first: 3) {
    url
    width
    height
  }
  variants {
    id
    name
  }
}
    fragment ProductBase on Product {
  id
  name
  price
  description
  categories(first: 1) {
    name
  }
}`, {"fragmentName":"ProductDetails"}) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
export const CollectionGetListDocument = new TypedDocumentString(`
    query CollectionGetList($first: Int!, $skip: Int!) {
  collections(first: $first, skip: $skip) {
    ...CollectionListItem
  }
  collectionsConnection {
    aggregate {
      count
    }
  }
}
    fragment CollectionListItem on Collection {
  name
  slug
  description
  images(first: 1) {
    url
    width
    height
  }
}`) as unknown as TypedDocumentString<CollectionGetListQuery, CollectionGetListQueryVariables>;
export const ProductsGetByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {
  products(first: $first, skip: $skip, where: {categories_some: {slug: $slug}}) {
    ...ProductListItem
  }
  categories(where: {slug: $slug}, first: 1) {
    name
  }
  productsConnection(where: {categories_some: {slug: $slug}}) {
    aggregate {
      count
    }
  }
}
    fragment ProductBase on Product {
  id
  name
  price
  description
  categories(first: 1) {
    name
  }
}
fragment ProductListItem on Product {
  ...ProductBase
  images(first: 1) {
    url
    width
    height
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetByCollectionSlugDocument = new TypedDocumentString(`
    query ProductsGetByCollectionSlug($first: Int!, $skip: Int!, $slug: String!, $excludedIds: [ID!]) {
  products(
    first: $first
    skip: $skip
    where: {collections_some: {slug: $slug}, excludedIds: $excludedIds}
  ) {
    ...ProductListItem
  }
  collections(where: {slug: $slug}) {
    name
  }
  productsConnection(
    where: {collections_some: {slug: $slug}, excludedIds: $excludedIds}
  ) {
    aggregate {
      count
    }
  }
}
    fragment ProductBase on Product {
  id
  name
  price
  description
  categories(first: 1) {
    name
  }
}
fragment ProductListItem on Product {
  ...ProductBase
  images(first: 1) {
    url
    width
    height
  }
}`) as unknown as TypedDocumentString<ProductsGetByCollectionSlugQuery, ProductsGetByCollectionSlugQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    ...ProductDetails
  }
}
    fragment ProductBase on Product {
  id
  name
  price
  description
  categories(first: 1) {
    name
  }
}
fragment ProductDetails on Product {
  ...ProductBase
  collections(first: 1) {
    slug
  }
  images(first: 3) {
    url
    width
    height
  }
  variants {
    id
    name
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductGetByQueryDocument = new TypedDocumentString(`
    query ProductGetByQuery($query: String!, $skip: Int!, $first: Int!) {
  products(where: {nameContains: $query}, skip: $skip, first: $first) {
    ...ProductListItem
  }
  productsConnection(where: {nameContains: $query}) {
    aggregate {
      count
    }
  }
}
    fragment ProductBase on Product {
  id
  name
  price
  description
  categories(first: 1) {
    name
  }
}
fragment ProductListItem on Product {
  ...ProductBase
  images(first: 1) {
    url
    width
    height
  }
}`) as unknown as TypedDocumentString<ProductGetByQueryQuery, ProductGetByQueryQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($first: Int!, $skip: Int!) {
  products(first: $first, skip: $skip) {
    ...ProductListItem
  }
  productsConnection {
    aggregate {
      count
    }
  }
}
    fragment ProductBase on Product {
  id
  name
  price
  description
  categories(first: 1) {
    name
  }
}
fragment ProductListItem on Product {
  ...ProductBase
  images(first: 1) {
    url
    width
    height
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;