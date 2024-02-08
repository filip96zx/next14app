import { executeGraphql } from "@/api/executeGraphql";
import { type ListResponse } from "@/models";
import {
	ProductsGetByCategorySlugDocument,
	type ProductsGetByCategorySlugQueryVariables,
} from "@/gql/graphql";

export const getProductsByCategorySlug = async (
	params: ProductsGetByCategorySlugQueryVariables,
) => {
	const { products, productsConnection, categories } = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: params,
	});
	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
		categoryName: categories?.[0]?.name,
	} satisfies ListResponse;
};
