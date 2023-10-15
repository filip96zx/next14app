import { executeGraphql } from "@/api/executeGraphql";
import {  type ListResponse } from "@/app/models";
import { CategoryGetListDocument, type CategoryGetListQueryVariables } from "@/gql/graphql";

export const getCategoriesList = async (params: CategoryGetListQueryVariables) => {
	const { categories, categoriesConnection } = await executeGraphql({
		query: CategoryGetListDocument,
		variables: params,
	});
	return {
		content: categories,
		totalElements: categoriesConnection.aggregate.count,
	} satisfies ListResponse;
};
