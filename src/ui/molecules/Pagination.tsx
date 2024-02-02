import { type Route } from "next";
import { Suspense } from "react";
import { PaginationElement } from "@/ui/atoms/PaginationElement";
import { PaginationInput } from "@/ui/atoms/inputs";

const generateRange = (first: number, last: number) => {
	const numbers: Array<number> = [];
	for (let i = first; i <= last; i++) {
		numbers.push(i);
	}
	return numbers;
};
const getPageNumbers = ({
	page,
	totalPages,
	sideButtonsCount,
}: {
	page: number;
	totalPages: number;
	sideButtonsCount: number;
}) => {
	const startFromFirstPage = page - sideButtonsCount < 1;
	const willExceedTotal = page + sideButtonsCount > totalPages;
	const totalButtonsCount = sideButtonsCount * 2 + 1;

	if (startFromFirstPage) {
		return generateRange(1, Math.min(totalPages, totalButtonsCount));
	}

	if (willExceedTotal) {
		return generateRange(Math.max(totalPages - totalButtonsCount + 1, 1), totalPages);
	}
	return generateRange(page - sideButtonsCount, page + sideButtonsCount);
};

const bigStep = 5;
const smallStep = 1;

type TProps = { page: number; totalPages: number; route: Route; searchParamsPagination?: boolean };

export const Pagination = ({ page, totalPages, route, searchParamsPagination }: TProps) => {
	const getButtonNumbers = getPageNumbers({ page, totalPages, sideButtonsCount: 2 });
	const getPreviousPage = (step: number) => Math.max(page - step, 1);
	const getNextPage = (step: number) => Math.min(page + step, totalPages);
	const paginationProps = { route, searchParamsPagination };
	return (
		<nav className="flex gap-4" aria-label="Pagination">
			<Suspense>
				{page > 1 && (
					<>
						<PaginationElement
							{...paginationProps}
							page={getPreviousPage(bigStep)}
							label="<<"
							activeDisabled
						/>
						<PaginationElement
							{...paginationProps}
							page={getPreviousPage(smallStep)}
							label="<"
							activeDisabled
						/>
					</>
				)}
				{getButtonNumbers.map((pageNumber) => (
					<PaginationElement
						{...paginationProps}
						key={pageNumber}
						page={pageNumber}
						label={pageNumber}
						isActive={page === pageNumber}
					/>
				))}
				{page < totalPages && (
					<>
						<PaginationElement
							{...paginationProps}
							page={getNextPage(smallStep)}
							label=">"
							activeDisabled
						/>
						<PaginationElement
							{...paginationProps}
							page={getNextPage(bigStep)}
							label=">>"
							activeDisabled
						/>
					</>
				)}
			</Suspense>
			<div className="flex items-center gap-2">
				<PaginationInput {...paginationProps} totalPages={totalPages} currentPage={page} />
				<span> of {totalPages}</span>
			</div>
		</nav>
	);
};
