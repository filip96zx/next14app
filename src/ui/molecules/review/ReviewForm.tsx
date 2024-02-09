import { ReviewFormOptimisticWrapper } from "./ReviewFormOptimisticWrapper";
import { Input, TextArea } from "@/ui/atoms/inputs";
import { RatingInput } from "@/ui/molecules/rating/RatingInput";

type TProps = { productId: string };

export const ReviewForm = async ({ productId }: TProps) => {
	return (
		<section data-testid="add-review-form">
			<form className="group">
				<ReviewFormOptimisticWrapper>
					<h4 className="mb-4 text-lg font-semibold">Add review</h4>
					<input type="hidden" value={productId} name="productId" />
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
				</ReviewFormOptimisticWrapper>
			</form>
		</section>
	);
};
