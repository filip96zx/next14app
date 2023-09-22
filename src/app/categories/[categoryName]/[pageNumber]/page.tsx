import { type Route } from "next";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/PaginatedProductList";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { getProductsGetByCategorySlug } from "@/app/api";

export async function generateStaticParams() {
	const { totalElements } = await getProductsGetByCategorySlug({
		slug: "t-shirts",
		first: 1,
		skip: 0,
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
			params={{ ...getPaginationParams({ pageNumber }), slug: categoryName }}
			route={`/categories/${categoryName}` as Route}
			goBackParams={`/categories/${categoryName}/${pageNumber}`}
		/>
	);
}
