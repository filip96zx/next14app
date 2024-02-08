import { type Route } from "next";
import { redirect } from "next/navigation";
import { PaginatedProductList, getPaginationParams } from "@/ui/organisms/list";
import { getProductsByCategorySlug } from "@/api";
import { PageHeader } from "@/ui/atoms/PageHeader";
import { getMetadataTitle } from "@/utils";

export const generateMetadata = async ({ params: { pageNumber, slug } }: TProps) => {
	const queryParams = {
		slug,
		...getPaginationParams({ pageNumber }),
	};
	const { categoryName } = await getProductsByCategorySlug(queryParams);

	if (!categoryName) return null;
	return {
		title: getMetadataTitle(categoryName),
	};
};

type TProps = {
	params: { pageNumber: string; slug: string };
};

export default async function ProductsPage({ params: { pageNumber, slug } }: TProps) {
	const queryParams = {
		slug,
		...getPaginationParams({ pageNumber }),
	};
	const { categoryName } = await getProductsByCategorySlug(queryParams);

	if (!categoryName) {
		redirect("/products");
	}

	return (
		<div>
			<PageHeader>{categoryName}</PageHeader>
			<PaginatedProductList
				getListQuery={getProductsByCategorySlug}
				params={queryParams}
				route={`/categories/${slug}` as Route}
				// TODO task 1
				// goBackParams={`/categories/${slug}/${pageNumber}`}
			/>
		</div>
	);
}
