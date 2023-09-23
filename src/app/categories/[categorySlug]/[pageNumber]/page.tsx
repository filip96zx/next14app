import { type Route } from "next";
import { redirect } from "next/navigation";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/list";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { getProductsByCategorySlug } from "@/app/api";
import { ListHeader } from "@/app/ui/ListHeader";
import { getMetadataTitle } from "@/app/utils";

export async function _generateStaticParams() {
	const { totalElements } = await getProductsByCategorySlug({
		slug: "t-shirts",
		first: 1,
		skip: 0,
	});
	return Array.from({ length: Math.ceil(totalElements / LIST_PAGE_SIZE) }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
}

export const generateMetadata = async ({ params: { pageNumber, categorySlug } }: TProps) => {
	const queryParams = {
		slug: categorySlug,
		...getPaginationParams({ pageNumber }),
	};
	const { categoryName } = await getProductsByCategorySlug(queryParams);

	if (!categoryName) return null;
	return {
		title: getMetadataTitle(categoryName),
	};
};

type TProps = {
	params: { pageNumber: string; categorySlug: string };
};

export default async function ProductsPage({ params: { pageNumber, categorySlug } }: TProps) {
	const queryParams = {
		slug: categorySlug,
		...getPaginationParams({ pageNumber }),
	};
	const { categoryName } = await getProductsByCategorySlug(queryParams);

	if (!categoryName) {
		redirect("/products");
	}

	return (
		<div>
			<ListHeader>{categoryName}</ListHeader>
			<PaginatedProductList
				getListQuery={getProductsByCategorySlug}
				params={queryParams}
				route={`/categories/${categorySlug}` as Route}
				goBackParams={`/categories/${categorySlug}/${pageNumber}`}
			/>
		</div>
	);
}
