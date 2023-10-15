import { executeGraphql } from "@/api/executeGraphql";
import { ProductUpdateAverageRatingByIdDocument } from "@/gql/graphql";

export const updateProductAverageRating = async (productId: string) => {
	const { productCalculateAndUpdateAverageRating } = await executeGraphql({
		query: ProductUpdateAverageRatingByIdDocument,
		variables: { productId },
		cache: "no-cache",
	});
	return productCalculateAndUpdateAverageRating;
};
