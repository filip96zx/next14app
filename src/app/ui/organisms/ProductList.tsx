import { ProductListItem } from "@/app/ui/molecules/ProductListItem";
import { type TProduct } from "@/app/ui/types";

interface IProps {
	products: TProduct[];
}

export const ProductList = ({ products }: IProps) => {
	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
