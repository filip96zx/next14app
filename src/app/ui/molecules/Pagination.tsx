import { type Route } from "next";
import { Suspense } from "react";
import { PaginationElement } from "@/app/ui/atoms/PaginationElement";
import { PaginationInput } from "@/app/ui/molecules/PaginationInput";

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
	const startFromFirst = page - 2 < 1;
	const willExceedTotal = page + 2 > totalPages;
	const totalButtonsCount = sideButtonsCount * 2 + 1;

	if (startFromFirst) {
		return generateRange(1, totalButtonsCount);
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
		<nav className="flex gap-4">
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
				<PaginationInput route={route} totalPages={totalPages} currentPage={page} />
			</Suspense>
		</nav>
	);
};
