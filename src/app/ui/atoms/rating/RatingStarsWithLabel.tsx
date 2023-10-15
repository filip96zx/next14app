import { RatingStars } from "./RatingStars";

type TProps = {
	rating: number;
	ratingCount: number;
};

export const RatingStarsWithLabel = ({ rating, ratingCount }: TProps) => {
	return (
		<div className="mb-3 flex items-center justify-center gap-3">
			<div className="relative">
				<RatingStars rating={rating} />
				{ratingCount > 0 && (
					<div className="absolute left-0 right-0 top-[75%] mx-auto text-center text-xs text-gray-400">
						({ratingCount})
					</div>
				)}
			</div>
			<span className="text-sm text-gray-500" data-testid="product-rating">
				{rating.toFixed(2)}
			</span>
		</div>
	);
};
