import { type Route } from "next";
import { Suspense } from "react";
import { PaginationElement } from "@/app/ui/atoms/PaginationElement";
import { PaginationInput } from "@/app/ui/atoms/inputs";

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
		return generateRange(totalPages - totalButtonsCount + 1, totalPages);
	}
	return generateRange(page - sideButtonsCount, page + sideButtonsCount);
};

const bigStep = 5;
const smallStep = 1;
const defaultPageNumber = 1;

type TProps = { page: number; totalPages: number; route: Route };

export const Pagination = ({ page, totalPages, route }: TProps) => {
	const getButtonNumbers = getPageNumbers({ page, totalPages, sideButtonsCount: 2 });
	const getPreviousPage = (step: number) => Math.max(page - step, 1);
	const getNextPage = (step: number) => Math.min(page + step, totalPages);
	return (
		<nav className="flex gap-4" aria-label="Pagination">
			<Suspense>
				{page > 1 && (
					<>
						<PaginationElement
							route={route}
							page={getPreviousPage(bigStep)}
							label="<<"
							activeDisabled
						/>
						<PaginationElement
							route={route}
							page={getPreviousPage(smallStep)}
							label="<"
							activeDisabled
						/>
					</>
				)}
				{getButtonNumbers.map((pageNumber) => (
					<PaginationElement
						key={pageNumber}
						route={route}
						page={pageNumber}
						label={pageNumber}
						forceActive={[pageNumber, page].every((x) => x === defaultPageNumber)}
					/>
				))}
				{page < totalPages && (
					<>
						<PaginationElement
							route={route}
							page={getNextPage(smallStep)}
							label=">"
							activeDisabled
						/>
						<PaginationElement
							route={route}
							page={getNextPage(bigStep)}
							label=">>"
							activeDisabled
						/>
					</>
				)}
			</Suspense>
			<div className="flex items-center gap-2">
				<PaginationInput route={route} totalPages={totalPages} currentPage={page} />
				<span> of {totalPages}</span>
			</div>
		</nav>
	);
};
