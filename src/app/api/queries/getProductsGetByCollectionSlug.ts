import { executeGraphql } from "@/app/api/executeGraphql";
import { type ListResponse } from "@/app/models";
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
	});
	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
		collectionName: collections[0]?.name,
	} satisfies ListResponse;
};
