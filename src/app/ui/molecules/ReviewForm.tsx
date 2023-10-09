import { revalidateTag } from "next/cache";
import { createRating } from "@/api/mutations";
import { RevalidateTags } from "@/app/models";
import { Button } from "@/app/ui/atoms/buttons";
import { Input, TextArea } from "@/app/ui/atoms/inputs";
import { RatingInput } from "@/app/ui/molecules/rating/RatingInput";

type TProps = { productId: string };

type TFormValues = {
	headline: string;
	name: string;
	email: string;
	content: string;
	rating: number;
};

export const ReviewForm = async ({ productId }: TProps) => {
	async function handleCreateProductRatingServerAction(formData: unknown) {
		"use server";
		const data = formData as Map<keyof TFormValues, string>;
		if (
			!data.get("headline") ||
			!data.get("name") ||
			!data.get("email") ||
			!data.get("content") ||
			!data.get("rating")
		) {
			throw new Error("Invalid form data");
		}

		await createRating({
			productId,
			rating: {
				comment: data.get("content")!,
				rating: parseInt(data.get("rating")!),
				title: data.get("headline")!,
				userName: data.get("name")!,
				email: data.get("email")!,
			},
		});
		revalidateTag(RevalidateTags.PRODUCT_RATING);
	}
	return (
		<section data-testid="add-review-form">
			<h4 className="text-lg font-semibold">Add review</h4>
			<form className="group" action={handleCreateProductRatingServerAction}>
				<div className="grid grid-cols-4 gap-2">
					<div className="col-span-4">
						<Input className="w-full" name="headline" label="Title" required maxLength={100} />
					</div>
					<div className="col-span-2">
						<Input className="col-span-2" name="name" label="Name" required maxLength={50} />
					</div>
					<div className="col-span-2">
						<Input
							className="col-span-2"
							name="email"
							type="email"
							label="Email"
							required
							maxLength={50}
						/>
					</div>
					<div className="col-span-4">
						<TextArea
							name="content"
							label="Content"
							className="h-20"
							required
							maxLength={2000}
							minLength={5}
						/>
					</div>
					<div>
						<RatingInput name="rating" />
					</div>
				</div>
				<Button
					type="submit"
					variant="primary"
					additionalClassName="group-invalid:pointer-events-none group-invalid:opacity-50"
				>
					Submit
				</Button>
			</form>
		</section>
	);
};
