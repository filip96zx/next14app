import { redirect } from "next/navigation";
import { type Route } from "next";
import { ProductList } from "./shared/ProductList";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { type ProductListItemFragment } from "@/gql/graphql";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { type ListResponse } from "@/app/models";

type TQuery<TParams> = (params: TParams) => Promise<ListResponse<ProductListItemFragment>>;

type TProps<TParams> = {
	getListQuery: TQuery<TParams>;
	params: TParams;
	route: Route;
	goBackParams: string;
};

export const getPaginationParams = ({
	pageNumber,
	pageSize = LIST_PAGE_SIZE,
}: {
	pageNumber: string;
	pageSize?: number;
}) => ({ skip: (parseInt(pageNumber) - 1) * pageSize, first: pageSize });

export async function PaginatedProductList<TParams extends { skip: number; first: number }>({
	params,
	route,
	getListQuery,
	goBackParams,
}: TProps<TParams>) {
	const pageIndex = params.skip / params.first;
	const isPageNumberValid = !isNaN(params.first) && pageIndex >= 0;
	if (!isPageNumberValid) {
		redirect(`${route}/1`);
	}

	const { content: products, totalElements } = await getListQuery(params);

	const totalPages = Math.ceil(totalElements / params.first);

	if (pageIndex > totalPages) {
		redirect(`${route}/${totalPages}`);
	}

	const pageNumber = pageIndex + 1;

	return (
		<div>
			<div className="my-4 flex justify-center">
				<Pagination page={pageNumber} totalPages={totalPages} route={route} />
			</div>
			<ProductList products={products} goBackParams={goBackParams || pageNumber} />
		</div>
	);
}
