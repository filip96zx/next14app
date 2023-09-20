import { executeGraphql } from "@/app/api/executeGraphql";
import { ProductGetByIdDocument, ProductsGetListDocument } from "@/gql/graphql";

export const getProductById = async (id: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id });

	return product;
};

export type GetProductsSearchParams = {
	pageSize: number;
	page: number;
};

export const getProductsList = async ({ pageSize, page }: GetProductsSearchParams) => {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		first: pageSize,
		skip: pageSize * page,
	});
	return products;
};
