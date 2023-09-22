import { executeGraphql } from "@/app/api/executeGraphql";
import { type ListResponse } from "@/app/models";
import { type ProductGetByQueryQueryVariables, ProductGetByQueryDocument } from "@/gql/graphql";

export const getProductsByQuery = async (params: ProductGetByQueryQueryVariables) => {
	const { products, productsConnection } = await executeGraphql(ProductGetByQueryDocument, params);

	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
	} satisfies ListResponse;
};
