import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
import { ProductListItemImageCover } from "@/app/ui/atoms/ProductListItemImageCover";
import { type TProduct } from "@/app/ui/types";

type TProps = {
	product: TProduct;
};

export const ProductListItem = ({ product }: TProps) => {
	return (
		<li>
			<article>
				<ProductListItemImageCover {...product.image} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
