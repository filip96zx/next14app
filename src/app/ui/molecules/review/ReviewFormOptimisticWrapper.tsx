"use client";

import { experimental_useOptimistic as useOptimistic, useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/app/ui/atoms/buttons";
import { type RatingCreateMutationVariables, type RatingListItemFragment } from "@/gql/graphql";
import { ReviewListItem } from "@/app/ui/molecules/review/ReviewListItem";
import { handleCreateProductRatingServerAction } from "@/app/services/server-actions";

type TProps = { children: React.ReactNode };

type TFormValues = {
	headline: string;
	name: string;
	email: string;
	content: string;
	rating: number;
	productId: string;
};
export const ReviewFormOptimisticWrapper = ({ children }: TProps) => {
	const [optimisticRating, optimisticCreateRating] = useOptimistic<
		(RatingListItemFragment & { submitted: boolean }) | null
	>(null);
	const [formSubmitted, setFormSubmitted] = useState(false);
	return (
		<>
			{optimisticRating && <ReviewListItem rating={optimisticRating} />}
			{(formSubmitted || optimisticRating?.submitted) && (
				<div className="mb-20 mt-10 flex justify-center gap-1">
					<CheckCircle />
					<span>Thank you for your review</span>
				</div>
			)}
			{!formSubmitted && !optimisticRating?.submitted && (
				<>
					{children}
					<Button
						type="submit"
						variant="primary"
						additionalClassName="group-invalid:opacity-70"
						formAction={async (formData: unknown) => {
							const data = formData as Map<keyof TFormValues, string>;
							const rateResponse: RatingCreateMutationVariables = {
								productId: data.get("productId")!,
								rating: {
									title: data.get("headline")!,
									userName: data.get("name")!,
									email: data.get("email")!,
									comment: data.get("content")!,
									rating: parseInt(data.get("rating")!),
								},
							};
							optimisticCreateRating({
								submitted: true,
								comment: rateResponse.rating.comment,
								rating: rateResponse.rating.rating,
								title: rateResponse.rating.title,
								userName: rateResponse.rating.userName,
								createdAt: new Date().toISOString(),
							});
							setFormSubmitted(true);
							await handleCreateProductRatingServerAction(rateResponse);
						}}
					>
						Submit
					</Button>
				</>
			)}
		</>
	);
};
