import { type Route } from "next";
import { redirect } from "next/navigation";
import { PaginatedProductList, getPaginationParams } from "@/ui/organisms/list";
import { getCategoriesList, getProductsByCategorySlug } from "@/api";
import { PageHeader } from "@/ui/atoms/PageHeader";
import { getMetadataTitle } from "@/utils";
import { LIST_PAGE_SIZE } from "@/constants";

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

export const generateStaticParams = async () => {
	const { content } = await getCategoriesList({ first: 100, skip: 0 });
	const pages = await Promise.all(
		content.map(async (category) => {
			if (!category.slug) return null;
			const { totalElements } = await getProductsByCategorySlug({
				slug: category.slug,
				first: 1,
				skip: 0,
			});
			return Array.from({ length: Math.ceil(totalElements / LIST_PAGE_SIZE) }, (_, i) => ({
				pageNumber: (i + 1).toString(),
				slug: category.slug,
			}));
		}),
	);
	return pages.flat().filter((i) => Boolean(i));
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
