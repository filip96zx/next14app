"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { ChevronDown, ChevronUp } from "lucide-react";
import { createPaginationParams, handleForwardSearchParams } from "@/utils";
import { Button } from "@/ui/atoms/buttons";
import { Select } from "@/ui/atoms/inputs/shared/Select";
import { SortableField, SortOrder } from "@/gql/graphql";

type TProps = {
	route: Route;
	currentPage: number;
	searchParamsPagination?: boolean;
};

const focusInputParam = "searchPageFocus";

export const SortSelect = ({ route, currentPage, searchParamsPagination }: TProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const keepFocusOnRouteChange = searchParams.get(focusInputParam) === "true";
	const getSearchParamsSortBy = () => {
		const value = searchParams.get("order");
		if (value === SortOrder.Asc) {
			return value;
		}
		if (value === SortOrder.Desc) {
			return value;
		}
		return SortOrder.Asc;
	};

	const handleOnChange = useCallback(
		({ order = getSearchParamsSortBy(), value }: { value: string; order?: SortOrder }) => {
			const sortParams = value !== "none" ? { order, sortBy: value as SortableField } : {};
			router.push(
				handleForwardSearchParams(
					`${route}${createPaginationParams({
						params: { page: currentPage, ...sortParams },
						searchParamsPagination,
					})}`,
				) as Route,
				// { scroll: !searchParamsPagination },
			);
		},
		[route, router],
	);

	const SortIcons = {
		[SortOrder.Asc]: <ChevronUp />,
		[SortOrder.Desc]: <ChevronDown />,
	};

	const sortOrder: SortOrder = getSearchParamsSortBy();
	const value = searchParams.get("sortBy");
	return (
		<div className="mb-5 flex items-center">
			<div className="mr-2 inline-block w-60">
				<Select
					aria-label="sort select"
					key={value}
					defaultValue={value ?? undefined}
					autoFocus={keepFocusOnRouteChange}
					onChange={(e) => {
						handleOnChange({ value: e.target.value });
						// const target = e.target as HTMLInputElement;
						// const valueToNumber = parseInt(target.value);
						// if (isNaN(valueToNumber)) {
						// 	cancelDebounce(handleOnChange);
						// 	return;
						// }
						// debounce(handleOnChange)(valueToNumber);
					}}
				>
					<option value="none">None</option>
					<option value={SortableField.Price} data-testid="sort-by-price">
						Price
					</option>
					<option value={SortableField.Name}>Name</option>
					<option value={SortableField.CreatedAt}>Created at</option>
					<option value={SortableField.AverageRating} data-testid="sort-by-rating">
						Rating
					</option>
				</Select>
			</div>
			{value && (
				<Button
					onClick={() => {
						handleOnChange({
							value: value ?? "none",
							order: sortOrder === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc,
						});
					}}
					className="rounded-md bg-gray-200 px-1 py-1"
				>
					{SortIcons[sortOrder]}
				</Button>
			)}
		</div>
	);
};
