import { type Route } from "next";
import { redirect } from "next/navigation";
import { PaginatedProductListPage, getPaginationParams } from "@/app/ui/organisms/product-list";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { getProductsGetByCategorySlug } from "@/app/api";
import { ListHeader } from "@/app/ui/ListHeader";

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
	params: { pageNumber: string; categorySlug: string };
};

export default async function ProductsPage({ params: { pageNumber, categorySlug } }: TProps) {
	const queryParams = {
		slug: categorySlug,
		...getPaginationParams({ pageNumber }),
	};
	const { categoryName } = await getProductsGetByCategorySlug(queryParams);

	if (!categoryName) {
		redirect("/products");
	}

	return (
		<PaginatedProductListPage
			getListQuery={getProductsGetByCategorySlug}
			params={queryParams}
			route={`/categories/${categorySlug}` as Route}
			goBackParams={`/categories/${categorySlug}/${pageNumber}`}
			header={<ListHeader>{categoryName}</ListHeader>}
		/>
	);
}
