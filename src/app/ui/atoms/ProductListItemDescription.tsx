import { RatingStarsWithLabel } from "@/app/ui/atoms/rating";
import { parseMoney } from "@/app/utils";
import { type ProductListItemFragment } from "@/gql/graphql";

type TProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { categories, name, price, averageRating, ratingsCount },
}: TProps) => {
	const categoryName = categories?.[0]?.name;
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					{categoryName && (
						<>
							<span className="sr-only">Category:</span> {categoryName}
						</>
					)}
				</p>
				<RatingStarsWithLabel rating={averageRating} ratingCount={ratingsCount} />
			</div>
			<p className="text-sm font-medium text-gray-900" data-testid="product-price">
				{parseMoney(price)}
			</p>
		</div>
	);
};
