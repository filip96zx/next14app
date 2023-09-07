import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
import { ProductListItemImageCover } from "@/app/ui/atoms/ProductListItemImageCover";
import { type TProduct } from "@/app/ui/types";

interface IProps {
	product: TProduct;
}

export const ProductListItem = ({ product }: IProps) => {
	return (
		<li>
			<article>
				<ProductListItemImageCover {...product.image} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
