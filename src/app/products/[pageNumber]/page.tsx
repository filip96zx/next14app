import { type Metadata } from "next";
import { getProductsList } from "@/api";
// import { LIST_PAGE_SIZE } from "@/app/constants";
import { PageHeader } from "@/ui/atoms/PageHeader";
import { PaginatedProductList, getPaginationParams } from "@/ui/organisms/list";
import { getMetadataTitle } from "@/utils";
import { SortSelect } from "@/ui/atoms/inputs/SortSelect";
import { type SortOrder, type SortableField } from "@/gql/graphql";

export const metadata: Metadata = {
	title: getMetadataTitle("All products"),
	description: "All products list",
};

// export async function generateStaticParams() {
// 	const { totalElements } = await getProductsList({
// 		first: 1,
// 		skip: 0,
// 	});
// 	return Array.from({ length: Math.ceil(totalElements / LIST_PAGE_SIZE) }, (_, i) => ({
// 		pageNumber: (i + 1).toString(),
// 	}));
// }

type TProps = {
	params: { pageNumber: string };
	searchParams: { sortBy?: SortableField; order?: SortOrder };
};

export default async function ProductsPage({
	params: { pageNumber },
	searchParams: { order, sortBy },
}: TProps) {
	const sortParams = sortBy && order ? { field: sortBy, order } : undefined;
	return (
		<div>
			<PageHeader>All products</PageHeader>
			<SortSelect route="/products" currentPage={+pageNumber} />
			<PaginatedProductList
				getListQuery={getProductsList}
				params={{ ...getPaginationParams({ pageNumber }), orderBy: sortParams }}
				route="/products"
				// TODO task 1
				// goBackParams={`/products/${pageNumber}${createQueryParams({ sortBy, order })}`}
			/>
		</div>
	);
}
