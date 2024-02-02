import { executeGraphql } from "@/api/executeGraphql";
import { RevalidateTags, type ListResponse } from "@/models";
import { type ProductGetByQueryQueryVariables, ProductGetByQueryDocument } from "@/gql/graphql";

export const getProductsByQuery = async (params: ProductGetByQueryQueryVariables) => {
	const { products, productsConnection } = await executeGraphql({
		query: ProductGetByQueryDocument,
		variables: params,
		next: {
			tags: [RevalidateTags.PRODUCT_LIST],
		},
	});

	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
	} satisfies ListResponse;
};
