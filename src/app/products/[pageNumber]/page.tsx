import { getProductsList } from "@/app/api/products";
import { LIST_PAGE_SIZE } from "@/app/constants";
import PaginatedProductList from "@/app/ui/organisms/PaginatedProductList";

export async function generateStaticParams() {
	const { totalElements } = await getProductsList({
		page: 1,
		pageSize: 1,
	});
	return Array.from({ length: Math.ceil(totalElements / LIST_PAGE_SIZE) }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
}

type TProps = {
	params: { pageNumber: string };
};

export default async function ProductsPage({ params: { pageNumber } }: TProps) {
	return (
		<PaginatedProductList
			getListQuery={getProductsList}
			params={{ pageNumber }}
			route="/products"
			goBackParams={`/products/${pageNumber}`}
		/>
	);
}
