import { executeGraphql } from "@/api/executeGraphql";
import { RevalidateTags, type ListResponse } from "@/app/models";
import { ProductsGetListDocument, type ProductsGetListQueryVariables } from "@/gql/graphql";

export const getProductsList = async (params: ProductsGetListQueryVariables) => {
	const { products, productsConnection } = await executeGraphql({
		query: ProductsGetListDocument,
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
