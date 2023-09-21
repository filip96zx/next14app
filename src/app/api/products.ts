import { executeGraphql } from "@/app/api/executeGraphql";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

export const getProductById = async (id: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id });

	return product;
};

export type GetProductsSearchParams = {
	pageSize: number;
	page: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ListResponse<T = any> = {
	content: Array<T>;
	totalElements: number;
};

export const getProductsList = async ({ pageSize, page }: GetProductsSearchParams) => {
	const { products, productsConnection } = await executeGraphql(ProductsGetListDocument, {
		first: pageSize,
		skip: pageSize * page,
	});
	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
	} satisfies ListResponse;
};

export type GetProductsByCategorySlugSearchParams = GetProductsSearchParams & { slug: string };

export const getProductsGetByCategorySlug = async ({
	pageSize,
	page,
	slug,
}: GetProductsByCategorySlugSearchParams) => {
	const { products, productsConnection } = await executeGraphql(ProductsGetByCategorySlugDocument, {
		first: pageSize,
		slug: slug,
		skip: pageSize * page,
	});
	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
	} satisfies ListResponse;
};
