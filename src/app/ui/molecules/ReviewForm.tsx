import { Button } from "@/app/ui/atoms/buttons";
import { Input, TextArea } from "@/app/ui/atoms/inputs";
import { RatingInput } from "@/app/ui/molecules/rating/RatingInput";

type TProps = {};

export const ReviewForm = ({}: TProps) => {
	return (
		<section data-testid="add-review-form">
			<h4 className="text-lg font-semibold">Add review</h4>
			<form className="group">
				<div className="grid grid-cols-4 gap-2">
					<div className="col-span-4">
						<Input className="w-full" name="headline" label="Title" required maxLength={100} />
					</div>
					<div className="col-span-2">
						<Input className="col-span-2" name="name" label="Name" required maxLength={50} />
					</div>
					<div className="col-span-2">
						<Input className="col-span-2" name="email" label="Email" required maxLength={50} />
					</div>
					<div className="col-span-4">
						<TextArea name="content" label="Content" className="h-20" required maxLength={2000} />
					</div>
					<div>
						<RatingInput name="rating" />
					</div>
				</div>
				<Button
					type="submit"
					additionalClassName="group-invalid:pointer-events-none group-invalid:opacity-50"
				>
					Submit
				</Button>
			</form>
		</section>
	);
};
