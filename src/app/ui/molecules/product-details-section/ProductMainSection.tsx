import { addToCartServerAction } from "@/app/services/server-actions";
import { ProductCacheDate } from "@/app/ui/atoms/ProductCacheData";
import { AddToCartButton } from "@/app/ui/atoms/buttons";
import { NumberInput } from "@/app/ui/atoms/inputs";
import { RatingStarsWithLabel } from "@/app/ui/atoms/rating";
import { ProductCard } from "@/app/ui/molecules/ProductCard";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductMainSection = async ({
	product,
	variantSelect,
}: {
	product: ProductListItemFragment;
	variantSelect: React.ReactNode;
}) => {
	return (
		<>
			<h1 className="text-center text-2xl font-bold text-gray-800">
				{product.name || <ProductCacheDate property="name" />}
			</h1>
			<div className="max-w-md">
				<ProductCard product={product} />
				<RatingStarsWithLabel rating={product.averageRating} ratingCount={product.ratingsCount} />
				<form action={addToCartServerAction.bind(null, product.id)}>
					{variantSelect}
					<NumberInput
						name="quantity"
						min={1}
						max={100}
						defaultValue={1}
						className="w-20"
						setDefaultValueOnClear
					/>
					<AddToCartButton />
				</form>
			</div>
			<p className="text-center text-gray-500">{product.description}</p>
		</>
	);
};
