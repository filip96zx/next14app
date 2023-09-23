import { executeGraphql } from "@/app/api/executeGraphql";
import { type ListResponse } from "@/app/models";
import { CollectionGetListDocument, type CollectionGetListQueryVariables } from "@/gql/graphql";

export const getCollectionList = async (params: CollectionGetListQueryVariables) => {
	const { collections, collectionsConnection } = await executeGraphql(
		CollectionGetListDocument,
		params,
	);

	return {
		content: collections,
		totalElements: collectionsConnection.aggregate.count,
	} satisfies ListResponse;
};
