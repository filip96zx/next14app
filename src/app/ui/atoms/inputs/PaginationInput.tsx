"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { Input } from "./shared/Input";
import { debounce, createPaginationParams, handleForwardSearchParams } from "@/app/utils";

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
		[route, router, searchParams, searchParamsPagination],
	);
	console.log({
		keepFocusOnRouteChange,
		sda: searchParams.get(focusInputParam),
		searchParams: searchParams.toString(),
	});
	return (
		<Input
			aria-label="Page search input"
			key={searchParams.get("page")}
			defaultValue={currentPage}
			max={totalPages}
			type="number"
			className="w-16 arrow-hide"
			autoFocus={keepFocusOnRouteChange}
			onInput={(e) => {
				const target = e.target as HTMLInputElement;
				const valueToNumber = parseInt(target.value);
				const valueRangeFixed = Math.max(1, Math.min(valueToNumber, totalPages));

				if (isNaN(valueToNumber)) {
					target.value = "";
					return;
				}
				debounce(handleOnChange)(valueRangeFixed);
				target.value = valueRangeFixed.toString();
			}}
		/>
	);
};
