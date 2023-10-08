import { Button } from "@/app/ui/atoms/buttons";
import { Input, NumberInput, TextArea } from "@/app/ui/atoms/inputs";
import { Rating } from "@/app/ui/molecules/Rating";

type TProps = {};

export const ReviewForm = ({}: TProps) => {
	return (
		<section data-testid="add-review-form">
			<h4 className="text-lg font-semibold">Add review</h4>
			<form className="group">
				<Input name="headline" label="Title *" required />
				<TextArea name="content" label="Content" required />
				<NumberInput required label="Rate" />
				<Input name="name" label="Name" required />
				<Rating />
				<Input name="email" label="Email" required />
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
