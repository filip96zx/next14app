import { getProductsByQuery } from "@/app/api";
import { ListHeader } from "@/app/ui/ListHeader";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/product-list";
import { createQueryParams } from "@/app/utils";

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
			<ListHeader>{query ? `Search results for: ${query}` : "All products"}</ListHeader>
			<PaginatedProductList
				getListQuery={getProductsByQuery}
				params={{ ...getPaginationParams({ pageNumber }), query: query || "" }}
				route="/search"
				goBackParams={`/search/${pageNumber}${createQueryParams({ query })}`}
			/>
		</div>
	);
}
