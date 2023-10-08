import { getProductsByQuery } from "@/api";
import { PageHeader } from "@/app/ui/atoms/PageHeader";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/list";

type TProps = {
	params: { pageNumber: string };
	searchParams: { query: string };
};

export default async function ProductsPage({
	params: { pageNumber },
	searchParams: { query },
}: TProps) {
	return (
		<div>
			<PageHeader>{query ? `Search results for: ${query}` : "All products"}</PageHeader>
			<PaginatedProductList
				getListQuery={getProductsByQuery}
				params={{ ...getPaginationParams({ pageNumber }), query: query || "" }}
				route="/search"
				// TODO task 1
				// goBackParams={`/search/${pageNumber}${createQueryParams({ query })}`}
			/>
		</div>
	);
}
