import { redirect } from "next/navigation";
import { type Route } from "next";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { type ListResponse } from "@/app/models";

type TQuery<TParams> = (params: TParams) => Promise<ListResponse>;

export type TPaginatedListProps<TParams> = {
	getListQuery: TQuery<TParams>;
	params: TParams;
	route: Route;
	goBackParams: string | number;
	renderList: (params: ListResponse & { goBackParams: string | number }) => React.ReactNode;
};

export const getPaginationParams = ({
	pageNumber,
	pageSize = LIST_PAGE_SIZE,
}: {
	pageNumber: string;
	pageSize?: number;
}) => ({ skip: (parseInt(pageNumber) - 1) * pageSize, first: pageSize });

export async function PaginatedList<TParams extends { skip: number; first: number }>({
	params,
	route,
	getListQuery,
	goBackParams,
	renderList,
}: TPaginatedListProps<TParams>) {
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
			<div className="my-4 flex justify-center">
				<Pagination page={pageNumber} totalPages={totalPages} route={route} />
			</div>
		</div>
	);
}
