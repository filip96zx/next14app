import Link from "next/link";
import { type TProduct } from "@/app/types";
import { ProductListItemImageCover } from "@/app/ui/atoms/ProductListItemImageCover";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";

type TProps = {
	product: TProduct;
};

export const ProductListItem = ({ product }: TProps) => {
	return (
		<li>
			<article>
				<Link href={`/product/${product.id}`} >
					<ProductListItemImageCover {...product.image} />
					<ProductListItemDescription product={product} />
				</Link>
			</article>
		</li>
	);
};
