import { getProductsByQuery } from "@/app/api";
import { ListHeader } from "@/app/ui/ListHeader";
import { PaginatedProductListPage, getPaginationParams } from "@/app/ui/organisms/product-list";

type TProps = {
	params: { pageNumber: string };
	searchParams: { query: string };
};

export default async function ProductsPage({
	params: { pageNumber },
	searchParams: { query },
}: TProps) {
	return (
		<PaginatedProductListPage
			getListQuery={getProductsByQuery}
			params={{ ...getPaginationParams({ pageNumber }), query: query || "" }}
			route="/search"
			header={<ListHeader>{query ? `Search results for: ${query}` : "All products"}</ListHeader>}
			goBackParams={`/search/${pageNumber}${query ? `?query=${query}` : ""}`}
		/>
	);
}
