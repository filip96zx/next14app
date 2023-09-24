"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { Input } from "./shared/Input";
import {
	createQueryParams,
	debounce,
	createPaginationParams,
	handleForwardSearchParams,
} from "@/app/utils";

type TProps = {
	route: Route;
	totalPages: number;
	currentPage: number;
	searchParamsPagination?: boolean;
};

const focusInputParam = "search-page-focus";

export const PaginationInput = ({
	route,
	totalPages,
	currentPage,
	searchParamsPagination,
}: TProps) => {
	const [value, setValue] = useState(currentPage);
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchParamsString = searchParams.toString();

	// useEffect(() => {
	// 	let active = true;
	// 	debounce(() => {
	// 		if (active && value && value !== currentPage) {
	// router.push(
	// 	handleForwardSearchParams(
	// 		`${route}${createPaginationParams({
	// 			params: { page: value, [focusInputParam]: true },
	// 			searchParamsPagination,
	// 		})}`,
	// 		searchParams.toString(),
	// 	) as Route,
	// 				{ scroll: !searchParamsPagination },
	// 			);
	// 		}
	// 	})();
	// 	return () => {
	// 		active = false;
	// 	};
	// }, [currentPage, route, router, value]);

	const keepFocusOnRouteChange = searchParams.get(focusInputParam) === "true";

	const handleOnChange = useCallback(
		(value: number) => {
			router.push(
				handleForwardSearchParams(
					`${route}${createPaginationParams({
						params: { page: value, [focusInputParam]: true },
						searchParamsPagination,
					})}`,
					searchParams.toString(),
				) as Route,
				{ scroll: !searchParamsPagination },
			);
		},
		[route, router, searchParams, searchParamsPagination],
	);

	return (
		<Input
			aria-label="Page search input"
			// value={currentPage}
			defaultValue={searchParams.get("page") || currentPage}
			max={totalPages}
			type="number"
			className="w-16 arrow-hide"
			autoFocus={keepFocusOnRouteChange}
			// onInput={(e) => {
			// 	const target = e.target as HTMLInputElement;
			// 	const valueToNumber = parseInt(target.value);

			// 	const valueRangeFixed = Math.max(1, Math.min(valueToNumber, totalPages));
			// 	if (isNaN(valueToNumber)) {
			// 		target.value = "";
			// 		return;
			// 	}
			// 	debounce(handleOnChange)(valueRangeFixed);
			// 	target.value = valueRangeFixed.toString();

			// 	// const valueRangeFixed = Math.max(1, Math.min(valueToNumber, totalPages));
			// 	// setValue(valueRangeFixed);
			// }}
			// onChange={(e) => {
			// 	const valueToNumber = parseInt(e.target.value);
			// }}
		/>
	);
};
