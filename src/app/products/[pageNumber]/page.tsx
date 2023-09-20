import { getProductsList } from "@/app/api/products";
import PaginatedProductList from "@/app/ui/organisms/PaginatedProductList";

type TProps = {
	params: { pageNumber: string };
};

export default async function ProductsPage({ params: { pageNumber } }: TProps) {
	return (
		<PaginatedProductList
			getListQuery={getProductsList}
			params={{ pageNumber }}
			route="/products"
		/>
	);
}
