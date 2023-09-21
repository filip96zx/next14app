import { ProductDetailsDescription } from "@/app/ui/atoms/ProductDetailsDescription";
import { ProductListItemImageCover } from "@/app/ui/atoms/ProductListItemImageCover";
import { type ProductDetailsFragment } from "@/gql/graphql";

type TProps = { product: ProductDetailsFragment };

export function ProductCard({ product }: TProps) {
	const image = product.images[0]?.url;
	return (
		<article>
			{image && <ProductListItemImageCover src={image} alt={product.name} />}
			<ProductDetailsDescription product={product} />
		</article>
	);
}
