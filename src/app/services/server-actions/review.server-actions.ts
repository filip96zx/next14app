"use server";

import { revalidateTag } from "next/cache";
import { createRating, updateProductAverageRating } from "@/api/mutations";
import { RevalidateTags, getTagToRevalidate } from "@/app/models";
import { type RatingCreateMutationVariables } from "@/gql/graphql";

type TFormValues = {
	headline: string;
	name: string;
	email: string;
	content: string;
	rating: number;
	productId: string;
};
export const parseRatingFormDataToCreateRequest = (
	formData: unknown,
): RatingCreateMutationVariables => {
	const data = formData as Map<keyof TFormValues, string>;
	return {
		productId: data.get("productId")!,
		rating: {
			title: data.get("headline")!,
			userName: data.get("name")!,
			email: data.get("email")!,
			comment: data.get("content")!,
			rating: parseInt(data.get("rating")!),
		},
	};
};
export async function handleCreateProductRatingServerAction(data: RatingCreateMutationVariables) {
	await createRating(data);
	await updateProductAverageRating(data.productId);
	revalidateTag(getTagToRevalidate({ param: data.productId, tag: RevalidateTags.PRODUCT }));
	revalidateTag(getTagToRevalidate({ param: data.productId, tag: RevalidateTags.PRODUCT_RATING }));
	revalidateTag(RevalidateTags.PRODUCT_LIST);
}
