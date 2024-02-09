import { ListLayout } from "@/ui/atoms/ListLayout";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

type TProps = {
	products: Array<ProductListItemFragment>;
	dataTestid?: string;
	// TODO task 1
	// goBackParams: string | number;
};

export const ProductList = ({ products, dataTestid = "products-list" }: TProps) => {
	return (
		<ListLayout dataTestid={dataTestid}>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ListLayout>
	);
};
