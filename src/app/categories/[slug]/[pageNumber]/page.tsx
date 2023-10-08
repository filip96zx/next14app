import { type Route } from "next";
import { redirect } from "next/navigation";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/list";
import { getProductsByCategorySlug } from "@/api";
import { PageHeader } from "@/app/ui/atoms/PageHeader";
import { getMetadataTitle } from "@/app/utils";

// export async function generateStaticParams() {
// 	const { totalElements } = await getProductsByCategorySlug({
// 		slug: "t-shirts",
// 		first: 1,
// 		skip: 0,
// 	});
// 	return Array.from({ length: Math.ceil(totalElements / LIST_PAGE_SIZE) }, (_, i) => ({
// 		pageNumber: (i + 1).toString(),
// 	}));
// }

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
