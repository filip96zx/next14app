import { RatingStars } from "@/app/ui/atoms/rating";
import { type RatingListItemFragment } from "@/gql/graphql";

type TProps = { rating: RatingListItemFragment };

export const ReviewListItem = ({
	rating: { comment, createdAt, rating, userName, title },
}: TProps) => {
	return (
		<li>
			<h4 className="text-lg font-semibold">{title}</h4>
			<div className="flex items-center gap-3">
				<RatingStars rating={rating} />
				{Intl.DateTimeFormat("en-US").format(new Date(createdAt))}
			</div>
			<div>
				<p className="my-3 break-all text-base">{comment}</p>
				<p className="text-right text-sm text-gray-400">{userName}</p>
			</div>
		</li>
	);
};
