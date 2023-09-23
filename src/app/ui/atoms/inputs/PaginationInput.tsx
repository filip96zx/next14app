"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { Input } from "./shared/Input";
import { createQueryParams, debounce } from "@/app/utils";

type TProps = { route: Route; totalPages: number; currentPage: number };

const focusInputParam = "search-page-focus";

export const PaginationInput = ({ route, totalPages, currentPage }: TProps) => {
	const [value, setValue] = useState(currentPage);
	const router = useRouter();
	const { get } = useSearchParams();

	useEffect(() => {
		let active = true;
		debounce(() => {
			if (active && value && value !== currentPage) {
				const queryParams = createQueryParams({ [focusInputParam]: true });
				router.push(`${route}/${value}${queryParams}` as Route);
			}
		})();
		return () => {
			active = false;
		};
	}, [currentPage, route, router, value]);

	const keepFocusOnRouteChange = get(focusInputParam) === "true";

	return (
		<Input
			aria-label="Page search input"
			key={"input"}
			value={value}
			max={totalPages}
			type="number"
			className="w-16 arrow-hide"
			autoFocus={keepFocusOnRouteChange}
			onChange={(e) => {
				const valueToNumber = parseInt(e.target.value);
				const valueRangeFixed = isNaN(valueToNumber)
					? 1
					: Math.max(1, Math.min(valueToNumber, totalPages));
				setValue(valueRangeFixed);
			}}
		/>
	);
};
