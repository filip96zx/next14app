import { ReviewForm } from "./ReviewForm";
import { ReviewListItem } from "@/ui/molecules/review/ReviewListItem";
import { getRatingListByProductId } from "@/api";

type TProps = {
	productId: string;
};

export const ReviewList = async ({ productId }: TProps) => {
	const ratings = await getRatingListByProductId({ first: 4, where: { productId: productId } });
	return (
		<ul className="flex w-96 flex-col gap-10">
			{ratings.reverse().map((r, index) => (
				<ReviewListItem key={index} rating={r} />
			))}
			<ReviewForm productId={productId} />
		</ul>
	);
};
