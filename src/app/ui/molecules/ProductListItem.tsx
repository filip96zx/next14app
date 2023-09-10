import { ProductCard } from "@/app/ui/molecules/ProductCard";
import { type TProduct } from "@/app/types";

type TProps = {
	product: TProduct;
};

export const ProductListItem = ({ product }: TProps) => {
	return (
		<li>
			<ProductCard product={product} />
		</li>
	);
};
