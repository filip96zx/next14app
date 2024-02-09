import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription";
import { ListItemImage } from "@/ui/atoms/image";
import { type ProductListItemFragment } from "@/gql/graphql";

type TProps = { product: ProductListItemFragment };

export function ProductCard({ product }: TProps) {
	const image = product.images[0];
	return (
		<article>
			{image && (
				<ListItemImage
					src={image.url}
					alt={product.name}
					width={image.width || undefined}
					height={image.height || undefined}
				/>
			)}
			<ProductDetailsDescription product={product} />
		</article>
	);
}
