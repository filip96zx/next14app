import { redirect } from "next/navigation";
import { type Route } from "next";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { type ListResponse } from "@/app/models";

type TQuery<TParams, TResult> = (params: TParams) => Promise<ListResponse<TResult>>;

export const getPagesToStaticGenerate = async ({
	totalElements,
	pageSize = LIST_PAGE_SIZE,
}: {
	totalElements: number;
	pageSize: number;
}) => {
	return Array.from({ length: Math.ceil(totalElements / pageSize) }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
};

export type TPaginatedListProps<TParams, TResult> = {
	getListQuery: TQuery<TParams, TResult>;
	params: TParams;
	route: Route;
	goBackParams: string | number;
	renderList: (params: ListResponse & { goBackParams: string | number }) => React.ReactNode;
	searchParamsPagination?: boolean;
	hidePagination?: boolean;
};

export const getPaginationParams = ({
	pageNumber,
	pageSize = LIST_PAGE_SIZE,
}: {
	pageNumber: string | number;
	pageSize?: number;
}) => {
	const page = typeof pageNumber === "string" ? parseInt(pageNumber) : pageNumber;
	return { skip: (page - 1) * pageSize, first: pageSize };
};

export async function PaginatedList<TParams extends { skip: number; first: number }, TResult>({
	params,
	route,
	getListQuery,
	goBackParams,
	renderList,
	searchParamsPagination,
	hidePagination,
}: TPaginatedListProps<TParams, TResult>) {
	const pageIndex = params.skip / params.first;
	const isPageNumberValid = !isNaN(params.first) && pageIndex >= 0;
	if (!isPageNumberValid) {
		redirect(`${route}/1`);
	}

	const { content, totalElements } = await getListQuery(params);

	const totalPages = Math.ceil(totalElements / params.first);

	if (pageIndex > totalPages) {
		redirect(`${route}/${totalPages}`);
	}

	const pageNumber = pageIndex + 1;

	return (
		<div>
			{renderList({ content, goBackParams: goBackParams || pageNumber, totalElements })}
			{!hidePagination && (
				<div className="my-4 flex justify-center">
					<Pagination
						page={pageNumber}
						totalPages={totalPages}
						route={route}
						searchParamsPagination={searchParamsPagination}
					/>
				</div>
			)}
		</div>
	);
}
