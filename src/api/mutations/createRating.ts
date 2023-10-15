import { executeGraphql } from "@/api/executeGraphql";
import { RatingCreateDocument, type RatingCreateMutationVariables } from "@/gql/graphql";

export async function createRating(params: RatingCreateMutationVariables) {
	const { ratingCreate } = await executeGraphql({
		query: RatingCreateDocument,
		variables: params,
	});
	return ratingCreate;
}
