import { redirect } from "next/navigation";
import { type Route } from "next";
import { type ListResponse, type GetProductsSearchParams } from "@/app/api/products";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { type ProductListItemFragment } from "@/gql/graphql";
import { LIST_PAGE_SIZE } from "@/app/constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TQueryType<TParams extends GetProductsSearchParams = any> = (
	params: TParams,
) => Promise<ListResponse<ProductListItemFragment>>;

type TProps<TQuery extends TQueryType> = {
	getListQuery: TQuery;
	params: Omit<Parameters<TQuery>[0], "page" | "pageSize"> & {
		pageNumber: string;
		pageSize?: number;
	};
	route: Route;
};

export default async function PaginatedProductList<TQuery extends TQueryType>({
	params: { pageNumber, ...params },
	route,
	getListQuery,
}: TProps<TQuery>) {
	const pageToNumber = parseInt(pageNumber);
	const pageIndex = pageToNumber - 1;
	const pageSize = params.pageSize || LIST_PAGE_SIZE;

	const isPageNumberValid = !isNaN(pageToNumber) && pageIndex >= 0;
	if (!isPageNumberValid) {
		redirect(`${route}/1`);
	}

	const { content: products, totalElements } = await getListQuery({
		page: pageIndex,
		pageSize,
		...params,
	});

	const totalPages = Math.ceil(totalElements / pageSize);

	if (process.env.NODE_ENV === "production") {
		if (pageIndex > totalPages) {
			redirect(`${route}/${totalPages}`);
		}
	}
	return (
		<div>
			<div className="my-4 flex justify-center">
				<Pagination page={pageIndex + 1} totalPages={totalPages} route={route} />
			</div>
			<ProductList products={products} goBackParams={pageNumber} />
		</div>
	);
}
