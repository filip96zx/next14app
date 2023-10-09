import { executeGraphql } from "@/api/executeGraphql";
import { RevalidateTags } from "@/app/models";
import {
	RatingGetListByProductIdDocument,
	type RatingGetListByProductIdQueryVariables,
} from "@/gql/graphql";

export const getRatingListByProductId = async (params: RatingGetListByProductIdQueryVariables) => {
	const { ratings } = await executeGraphql({
		query: RatingGetListByProductIdDocument,
		variables: params,
		next: {
			tags: [RevalidateTags.PRODUCT_RATING],
		},
	});
	return ratings;
};
