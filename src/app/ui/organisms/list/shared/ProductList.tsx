import { ListLayout } from "@/app/ui/atoms/ListLayout";
import { ProductListItem } from "@/app/ui/molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

type TProps = {
	products: Array<ProductListItemFragment>;
	goBackParams: string | number;
};

export const ProductList = ({ products, goBackParams }: TProps) => {
	return (
		<ListLayout data-testid="products-list">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} goBackParams={goBackParams} />
			))}
		</ListLayout>
	);
};
