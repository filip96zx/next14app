import { executeGraphql } from "@/api/executeGraphql";
import { type ListResponse } from "@/models";
import {
	ProductGetRelatedProductByProductNameDocument,
	type ProductGetRelatedProductByProductNameQueryVariables,
} from "@/gql/graphql";

export const getProductRelatedProductsByProductName = async (
	params: ProductGetRelatedProductByProductNameQueryVariables,
) => {
	const { productsRelated } = await executeGraphql({
		query: ProductGetRelatedProductByProductNameDocument,
		variables: params,
	});
	return {
		content: productsRelated,
		totalElements: 4,
	} satisfies ListResponse;
};
