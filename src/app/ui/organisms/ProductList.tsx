import { ProductListItem } from "@/app/ui/molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

type TProps = {
	products: Array<ProductListItemFragment>;
	goBackParams: string;
};

export const ProductList = ({ products, goBackParams }: TProps) => {
	return (
		<ul
			className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} goBackParams={goBackParams} />
			))}
		</ul>
	);
};
