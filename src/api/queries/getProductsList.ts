import { executeGraphql } from "@/api/executeGraphql";
import { type ListResponse } from "@/app/models";
import { ProductsGetListDocument, type ProductsGetListQueryVariables } from "@/gql/graphql";

export const getProductsList = async (params: ProductsGetListQueryVariables) => {
	const { products, productsConnection } = await executeGraphql({
		query: ProductsGetListDocument,
		variables: params,
	});
	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
	} satisfies ListResponse;
};
