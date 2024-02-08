import { executeGraphql } from "@/api/executeGraphql";
import { type ListResponse } from "@/models";
import { CollectionGetListDocument, type CollectionGetListQueryVariables } from "@/gql/graphql";

export const getCollectionList = async (params: CollectionGetListQueryVariables) => {
	const { collections, collectionsConnection } = await executeGraphql({
		query: CollectionGetListDocument,
		variables: params,
	});

	return {
		content: collections,
		totalElements: collectionsConnection.aggregate.count,
	} satisfies ListResponse;
};
