import { executeGraphql } from "@/app/api/executeGraphql";
import { type ListResponse } from "@/app/models";
import {
	ProductsGetByCategorySlugDocument,
	type ProductsGetByCategorySlugQueryVariables,
} from "@/gql/graphql";

export const getProductsByCategorySlug = async (
	params: ProductsGetByCategorySlugQueryVariables,
) => {
	const { products, productsConnection, categories } = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		params,
	);
	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
		categoryName: categories?.[0]?.name,
	} satisfies ListResponse;
};
