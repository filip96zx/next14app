import { type Route } from "next";
import { getProductsGetByCategorySlug } from "@/app/api/products";
import PaginatedProductList from "@/app/ui/organisms/PaginatedProductList";
import { LIST_PAGE_SIZE } from "@/app/constants";

export async function generateStaticParams() {
	const { totalElements } = await getProductsGetByCategorySlug({
		slug: "t-shirts",
		page: 1,
		pageSize: 1,
	});
	return Array.from({ length: Math.ceil(totalElements / LIST_PAGE_SIZE) }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
}

type TProps = {
	params: { pageNumber: string; categoryName: string };
};

export default async function ProductsPage({ params: { pageNumber, categoryName } }: TProps) {
	return (
		<PaginatedProductList
			getListQuery={getProductsGetByCategorySlug}
			params={{ pageNumber, slug: categoryName }}
			route={`${"/categories"}/${categoryName}` as Route}
		/>
	);
}
