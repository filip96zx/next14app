import { executeGraphql } from "@/app/api/executeGraphql";
import { type ListResponse } from "@/app/models";
import {
	ProductsGetByCategorySlugDocument,
	type ProductsGetByCategorySlugQueryVariables,
} from "@/gql/graphql";

export const getProductsGetByCategorySlug = async (
	params: ProductsGetByCategorySlugQueryVariables,
) => {
	const { products, productsConnection } = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		params,
	);
	return {
		content: products,
		totalElements: productsConnection.aggregate.count,
	} satisfies ListResponse;
};
