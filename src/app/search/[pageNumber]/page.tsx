import { getProductsByQuery } from "@/app/api";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/PaginatedProductList";

type TProps = {
	params: { pageNumber: string };
	searchParams: { query: string };
};

export default async function ProductsPage({
	params: { pageNumber },
	searchParams: { query },
}: TProps) {
	return (
		<PaginatedProductList
			getListQuery={getProductsByQuery}
			params={{ ...getPaginationParams({ pageNumber }), query: query || "" }}
			route="/search"
			goBackParams={`/search/${pageNumber}${query ? `?query=${query}` : ""}`}
		/>
	);
}
