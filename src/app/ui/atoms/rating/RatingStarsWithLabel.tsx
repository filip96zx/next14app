import { RatingStars } from "./RatingStars";

type TProps = {
	rating: number;
};

export const RatingStarsWithLabel = ({ rating }: TProps) => {
	return (
		<div className="flex items-center justify-center gap-3">
			<RatingStars rating={rating} />
			<span className="text-sm text-gray-500" data-testid="product-rating">
				{rating.toFixed(2)}
			</span>
		</div>
	);
};
