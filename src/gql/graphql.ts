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
  DateTime: { input: string; output: string; }
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
  products: Array<Product>;
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
  orderCreate?: Maybe<Order>;
  orderItemUpdate?: Maybe<OrderItem>;
  orderItemsUpdate?: Maybe<Order>;
  orderUpdateStatus?: Maybe<Order>;
  productCalculateAndUpdateAverageRating?: Maybe<Product>;
  productsCalculateAndUpdateAverageRating: Array<Product>;
  ratingCreate: Rating;
};


export type MutationOrderCreateArgs = {
  items: Array<OrderItemInput>;
};


export type MutationOrderItemUpdateArgs = {
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationOrderItemsUpdateArgs = {
  id: Scalars['ID']['input'];
  items: Array<OrderItemInput>;
  updateMethod?: InputMaybe<OrderItemsUpdateMethod>;
};


export type MutationOrderUpdateStatusArgs = {
  id: Scalars['ID']['input'];
  status: OrderStatus;
};


export type MutationProductCalculateAndUpdateAverageRatingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRatingCreateArgs = {
  productId: Scalars['ID']['input'];
  ratingInput: RatingInput;
};

export type Order = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  items: Array<OrderItem>;
  status: OrderStatus;
  totalItems: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderItemsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderByInput = {
  field: SortableField;
  order: SortOrder;
};

export type OrderItem = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  variantId: Scalars['ID']['output'];
  variantName: Scalars['String']['output'];
};

export type OrderItemInput = {
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  variantId: Scalars['ID']['input'];
};

export enum OrderItemsUpdateMethod {
  Increment = 'INCREMENT',
  Set = 'SET'
}

export enum OrderStatus {
  Draft = 'DRAFT',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type OrderWhereInput = {
  status?: InputMaybe<OrderStatus>;
};

export type Product = {
  averageRating: Scalars['Float']['output'];
  categories: Array<Maybe<Category>>;
  collections: Array<Maybe<Collection>>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Maybe<Image>>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  ratings: Array<Rating>;
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


export type ProductRatingsArgs = {
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
  categories: Array<Category>;
  categoriesConnection: Connection;
  category?: Maybe<Category>;
  collections: Array<Collection>;
  collectionsConnection: Connection;
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  products: Array<Product>;
  productsConnection: Connection;
  ratingConnection: Connection;
  ratings: Array<Rating>;
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


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryRatingConnectionArgs = {
  where?: InputMaybe<RatingWhereInput>;
};


export type QueryRatingsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingWhereInput>;
};

export type Rating = {
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userName: Scalars['String']['output'];
};

export type RatingInput = {
  comment: Scalars['String']['input'];
  email: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type RatingWhereInput = {
  productId?: InputMaybe<Scalars['ID']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum SortableField {
  AverageRating = 'averageRating',
  CreatedAt = 'createdAt',
  Name = 'name',
  Price = 'price',
  Slug = 'slug'
}

export type Variant = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CartCreateMutationVariables = Exact<{
  items: Array<OrderItemInput> | OrderItemInput;
}>;


export type CartCreateMutation = { orderCreate?: { id: string } | null };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { order?: { id: string } | null };

export type CartGetDetailsByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetDetailsByIdQuery = { order?: { totalItems: number, id: string, items: Array<{ id: string, name: string, price: number, quantity: number, variantName: string }> } | null };

export type CartGetTotalItemsByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetTotalItemsByIdQuery = { order?: { totalItems: number } | null };

export type CartIncrementItemsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  items: Array<OrderItemInput> | OrderItemInput;
}>;


export type CartIncrementItemsMutation = { orderItemsUpdate?: { id: string } | null };

export type CartUpdateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  items: Array<OrderItemInput> | OrderItemInput;
}>;


export type CartUpdateMutation = { orderItemsUpdate?: { totalItems: number, id: string, items: Array<{ id: string, name: string, price: number, quantity: number, variantName: string }> } | null };

export type CollectionGetListQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type CollectionGetListQuery = { collections: Array<{ name: string, slug: string, description: string, images: Array<{ url: string, width: number, height: number }> }>, collectionsConnection: { aggregate: { count: number } } };

export type OrderItemUpdateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type OrderItemUpdateMutation = { orderItemUpdate?: { id: string } | null };

export type UpdateOrderStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: OrderStatus;
}>;


export type UpdateOrderStatusMutation = { orderUpdateStatus?: { id: string } | null };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCategorySlugQuery = { products: Array<{ id: string, name: string, price: number, description: string, averageRating: number, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> }>, categories: Array<{ name?: string | null }>, productsConnection: { aggregate: { count: number } } };

export type ProductsGetByCollectionSlugQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
  excludedIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type ProductsGetByCollectionSlugQuery = { products: Array<{ id: string, name: string, price: number, description: string, averageRating: number, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> }>, collections: Array<{ name: string }>, productsConnection: { aggregate: { count: number } } };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, price: number, description: string, averageRating: number, collections: Array<{ slug: string } | null>, images: Array<{ url: string, width: number, height: number } | null>, variants: Array<{ id: string, name: string }>, categories: Array<{ name?: string | null } | null> } | null };

export type ProductGetByQueryQueryVariables = Exact<{
  query: Scalars['String']['input'];
  skip: Scalars['Int']['input'];
  first: Scalars['Int']['input'];
}>;


export type ProductGetByQueryQuery = { products: Array<{ id: string, name: string, price: number, description: string, averageRating: number, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> }>, productsConnection: { aggregate: { count: number } } };

export type ProductsGetListQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderByInput>;
}>;


export type ProductsGetListQuery = { products: Array<{ id: string, name: string, price: number, description: string, averageRating: number, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> }>, productsConnection: { aggregate: { count: number } } };

export type ProductUpdateAverageRatingByIdMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductUpdateAverageRatingByIdMutation = { productCalculateAndUpdateAverageRating?: { id: string } | null };

export type RatingCreateMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  rating: RatingInput;
}>;


export type RatingCreateMutation = { ratingCreate: { id: string } };

export type RatingGetListByProductIdQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingWhereInput>;
}>;


export type RatingGetListByProductIdQuery = { ratings: Array<{ createdAt: string, comment: string, rating: number, title: string, userName: string }> };

export type CartFragment = { id: string };

export type CartDetailsFragment = { totalItems: number, id: string, items: Array<{ id: string, name: string, price: number, quantity: number, variantName: string }> };

export type CollectionListItemFragment = { name: string, slug: string, description: string, images: Array<{ url: string, width: number, height: number }> };

export type OrderItemFragment = { id: string, name: string, price: number, quantity: number, variantName: string };

export type ProductBaseFragment = { id: string, name: string, price: number, description: string, averageRating: number, categories: Array<{ name?: string | null } | null> };

export type ProductListItemFragment = { id: string, name: string, price: number, description: string, averageRating: number, images: Array<{ url: string, width: number, height: number } | null>, categories: Array<{ name?: string | null } | null> };

export type ProductDetailsFragment = { id: string, name: string, price: number, description: string, averageRating: number, collections: Array<{ slug: string } | null>, images: Array<{ url: string, width: number, height: number } | null>, variants: Array<{ id: string, name: string }>, categories: Array<{ name?: string | null } | null> };

export type RatingListItemFragment = { createdAt: string, comment: string, rating: number, title: string, userName: string };

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
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Order {
  id
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const OrderItemFragmentDoc = new TypedDocumentString(`
    fragment OrderItem on OrderItem {
  id
  name
  price
  quantity
  variantName
}
    `, {"fragmentName":"OrderItem"}) as unknown as TypedDocumentString<OrderItemFragment, unknown>;
export const CartDetailsFragmentDoc = new TypedDocumentString(`
    fragment CartDetails on Order {
  ...Cart
  items {
    ...OrderItem
  }
  totalItems
}
    fragment Cart on Order {
  id
}
fragment OrderItem on OrderItem {
  id
  name
  price
  quantity
  variantName
}`, {"fragmentName":"CartDetails"}) as unknown as TypedDocumentString<CartDetailsFragment, unknown>;
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
  averageRating
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
  averageRating
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
  averageRating
  categories(first: 1) {
    name
  }
}`, {"fragmentName":"ProductDetails"}) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
export const RatingListItemFragmentDoc = new TypedDocumentString(`
    fragment RatingListItem on Rating {
  createdAt
  comment
  rating
  title
  userName
}
    `, {"fragmentName":"RatingListItem"}) as unknown as TypedDocumentString<RatingListItemFragment, unknown>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($items: [OrderItemInput!]!) {
  orderCreate(items: $items) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  order(id: $id, where: {status: DRAFT}) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartGetDetailsByIdDocument = new TypedDocumentString(`
    query CartGetDetailsById($id: ID!) {
  order(id: $id, where: {status: DRAFT}) {
    ...CartDetails
  }
}
    fragment Cart on Order {
  id
}
fragment CartDetails on Order {
  ...Cart
  items {
    ...OrderItem
  }
  totalItems
}
fragment OrderItem on OrderItem {
  id
  name
  price
  quantity
  variantName
}`) as unknown as TypedDocumentString<CartGetDetailsByIdQuery, CartGetDetailsByIdQueryVariables>;
export const CartGetTotalItemsByIdDocument = new TypedDocumentString(`
    query CartGetTotalItemsById($id: ID!) {
  order(id: $id, where: {status: DRAFT}) {
    totalItems
  }
}
    `) as unknown as TypedDocumentString<CartGetTotalItemsByIdQuery, CartGetTotalItemsByIdQueryVariables>;
export const CartIncrementItemsDocument = new TypedDocumentString(`
    mutation CartIncrementItems($id: ID!, $items: [OrderItemInput!]!) {
  orderItemsUpdate(id: $id, items: $items, updateMethod: INCREMENT) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
}`) as unknown as TypedDocumentString<CartIncrementItemsMutation, CartIncrementItemsMutationVariables>;
export const CartUpdateDocument = new TypedDocumentString(`
    mutation CartUpdate($id: ID!, $items: [OrderItemInput!]!) {
  orderItemsUpdate(id: $id, items: $items, updateMethod: SET) {
    ...CartDetails
  }
}
    fragment Cart on Order {
  id
}
fragment CartDetails on Order {
  ...Cart
  items {
    ...OrderItem
  }
  totalItems
}
fragment OrderItem on OrderItem {
  id
  name
  price
  quantity
  variantName
}`) as unknown as TypedDocumentString<CartUpdateMutation, CartUpdateMutationVariables>;
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
export const OrderItemUpdateDocument = new TypedDocumentString(`
    mutation OrderItemUpdate($id: ID!, $quantity: Int!) {
  orderItemUpdate(id: $id, quantity: $quantity) {
    id
  }
}
    `) as unknown as TypedDocumentString<OrderItemUpdateMutation, OrderItemUpdateMutationVariables>;
export const UpdateOrderStatusDocument = new TypedDocumentString(`
    mutation UpdateOrderStatus($id: ID!, $status: OrderStatus!) {
  orderUpdateStatus(id: $id, status: $status) {
    id
  }
}
    `) as unknown as TypedDocumentString<UpdateOrderStatusMutation, UpdateOrderStatusMutationVariables>;
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
  averageRating
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
  averageRating
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
  averageRating
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
  averageRating
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
    query ProductsGetList($first: Int!, $skip: Int!, $orderBy: OrderByInput) {
  products(first: $first, skip: $skip, orderBy: $orderBy) {
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
  averageRating
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
export const ProductUpdateAverageRatingByIdDocument = new TypedDocumentString(`
    mutation ProductUpdateAverageRatingById($productId: ID!) {
  productCalculateAndUpdateAverageRating(id: $productId) {
    id
  }
}
    `) as unknown as TypedDocumentString<ProductUpdateAverageRatingByIdMutation, ProductUpdateAverageRatingByIdMutationVariables>;
export const RatingCreateDocument = new TypedDocumentString(`
    mutation RatingCreate($productId: ID!, $rating: RatingInput!) {
  ratingCreate(productId: $productId, ratingInput: $rating) {
    id
  }
}
    `) as unknown as TypedDocumentString<RatingCreateMutation, RatingCreateMutationVariables>;
export const RatingGetListByProductIdDocument = new TypedDocumentString(`
    query RatingGetListByProductId($skip: Int, $first: Int, $where: RatingWhereInput) {
  ratings(first: $first, skip: $skip, where: $where) {
    ...RatingListItem
  }
}
    fragment RatingListItem on Rating {
  createdAt
  comment
  rating
  title
  userName
}`) as unknown as TypedDocumentString<RatingGetListByProductIdQuery, RatingGetListByProductIdQueryVariables>;