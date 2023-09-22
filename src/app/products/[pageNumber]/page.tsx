import { getProductsList } from "@/app/api";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/product-list";

export async function generateStaticParams() {
	const { totalElements } = await getProductsList({
		first: 1,
		skip: 0,
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
			params={getPaginationParams({ pageNumber })}
			route="/products"
			goBackParams={`/products/${pageNumber}`}
		/>
	);
}
