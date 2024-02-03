import { AddToCartButton, BackButton } from "@/app/ui/atoms/buttons";
import { NumberInput, Select } from "@/app/ui/atoms/inputs";
import { addToCartServerAction } from "@/app/services/server-actions";
import { RatingStarsWithLabel } from "@/app/ui/atoms/rating";
import { ProductCard } from "@/app/ui/molecules/ProductCard";
import { type ProductListItemFragment } from "@/gql/graphql";

interface IProps {
	product: ProductListItemFragment;
	productVariants?: { name: string; value: string }[];
	afterProductSection?: React.ReactNode;
}

export function ProductDetails({ product, afterProductSection, productVariants }: IProps) {
	return (
		<div className="flex flex-col  items-center justify-center gap-5">
			<div>
				<BackButton href={"/products"} keepSearchParams>
					All products
				</BackButton>
			</div>
			<h1 className="text-center text-2xl font-bold text-gray-800">{product.name}</h1>
			<div className="max-w-md">
				<ProductCard product={product} />
				<RatingStarsWithLabel rating={product.averageRating} ratingCount={product.ratingsCount} />
				<form action={addToCartServerAction.bind(null, product.id)}>
					<Select name="variantId" options={productVariants || []} />
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
			{afterProductSection}
		</div>
	);
}
