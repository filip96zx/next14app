import { Rating } from "@/app/ui/atoms/Rating";
import { type RatingListItemFragment } from "@/gql/graphql";

type TProps = { rating: RatingListItemFragment };

export const ReviewListItem = ({
	rating: { comment, createdAt, rating, userName, title },
}: TProps) => {
	return (
		<li>
			<h4 className="text-lg font-semibold">{title}</h4>
			<div className="flex items-center gap-3">
				<Rating rating={rating} />
				{Intl.DateTimeFormat("en-US").format(new Date(createdAt))}
			</div>
			<p className="text-base my-3">{comment}</p>
			<span className="float-right text-sm text-gray-400">{userName}</span>
		</li>
	);
};
