"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { NumberInput } from "./shared/NumberInput";
import {
	debounce,
	createPaginationParams,
	handleForwardSearchParams,
	cancelDebounce,
} from "@/app/utils";

type TProps = {
	route: Route;
	totalPages: number;
	currentPage: number;
	searchParamsPagination?: boolean;
};

const focusInputParam = "searchPageFocus";

export const PaginationInput = ({
	route,
	totalPages,
	currentPage,
	searchParamsPagination,
}: TProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const keepFocusOnRouteChange = searchParams.get(focusInputParam) === "true";

	const handleOnChange = useCallback(
		(value: number) => {
			router.push(
				handleForwardSearchParams(
					`${route}${createPaginationParams({
						params: { page: value, [focusInputParam]: true },
						searchParamsPagination,
					})}`,
				) as Route,
				{ scroll: !searchParamsPagination },
			);
		},
		[route, router, searchParamsPagination],
	);

	return (
		<NumberInput
			aria-label="Page search input"
			key={searchParams.get("page")}
			defaultValue={currentPage}
			className="w-16 arrow-hide"
			autoFocus={keepFocusOnRouteChange}
			min={1}
			max={totalPages}
			onChange={(e) => {
				const target = e.target as HTMLInputElement;
				const valueToNumber = parseInt(target.value);
				if (isNaN(valueToNumber)) {
					cancelDebounce(handleOnChange);
					return;
				}
				debounce(handleOnChange)(valueToNumber);
			}}
		/>
	);
};
