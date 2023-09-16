import { type Route } from "next";
import { PaginationElement } from "@/app/ui/atoms/PaginationElement";

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
	return (
		<nav className="flex gap-4">
			<PaginationElement
				route={route}
				page={Math.max(page - bigStep, 1)}
				label="<<"
				activeDisabled
			/>
			<PaginationElement
				route={route}
				page={Math.max(page - smallStep, 1)}
				label="<"
				activeDisabled
			/>
			{getButtonNumbers.map((pageNumber) => (
				<PaginationElement
					key={pageNumber}
					route={route}
					page={pageNumber}
					label={pageNumber}
					forceActive={[pageNumber, page].every((x) => x === defaultPageNumber)}
				/>
			))}
			<PaginationElement
				route={route}
				page={Math.min(page + smallStep, totalPages)}
				label=">"
				activeDisabled
			/>
			<PaginationElement
				route={route}
				page={Math.min(page + bigStep, totalPages)}
				label=">>"
				activeDisabled
			/>
		</nav>
	);
};
