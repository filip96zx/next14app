import { executeGraphql } from "@/api/executeGraphql";
import { RevalidateTags, getTagToRevalidate } from "@/app/models";
import {
	RatingGetListByProductIdDocument,
	type RatingGetListByProductIdQueryVariables,
} from "@/gql/graphql";

export const getRatingListByProductId = async (params: RatingGetListByProductIdQueryVariables) => {
	const { ratings } = await executeGraphql({
		query: RatingGetListByProductIdDocument,
		variables: params,
		next: {
			tags: [
				getTagToRevalidate({
					tag: RevalidateTags.PRODUCT_RATING,
					param: params.where?.productId || undefined,
				}),
			],
		},
	});
	return ratings;
};
