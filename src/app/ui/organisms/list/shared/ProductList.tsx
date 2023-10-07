import { ListLayout } from "@/app/ui/atoms/ListLayout";
import { ProductListItem } from "@/app/ui/molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

type TProps = {
	products: Array<ProductListItemFragment>;
	// TODO task 1
	// goBackParams: string | number;
};

export const ProductList = ({ products }: TProps) => {
	return (
		<ListLayout data-testid="products-list">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ListLayout>
	);
};
