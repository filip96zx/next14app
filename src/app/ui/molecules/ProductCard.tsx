import Link from "next/link";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
import { ProductListItemImageCover } from "@/app/ui/atoms/ProductListItemImageCover";
import { type TProduct } from "@/app/types";

type TProps = { product: TProduct };

export function ProductCard({ product }: TProps) {
	return (
		<article>
			<Link href={`/products/${product.id}`} prefetch>
				<ProductListItemImageCover {...product.image} />
				<ProductListItemDescription product={product} />
			</Link>
		</article>
	);
}
