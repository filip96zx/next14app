import { executeGraphql } from "@/api/executeGraphql";
import { RevalidateTags, type ListResponse } from "@/models";
import {
	ProductsGetByCollectionSlugDocument,
	type ProductsGetByCollectionSlugQueryVariables,
} from "@/gql/graphql";

export const getProductsByCollectionSlug = async (
	params: ProductsGetByCollectionSlugQueryVariables,
) => {
	const { products, productsConnection, collections } = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: params,
		next: {
			tags: [RevalidateTags.PRODUCT_LIST],
		},
	});
	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
		collectionName: collections[0]?.name,
	} satisfies ListResponse;
};
