"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { Input } from "@/app/ui/atoms/Input";
import { debounce } from "@/app/utils";

type TProps = { route: Route; totalPages: number; currentPage: number };
const focusInputParam = "focus-search";
export const PaginationInput = ({ route, totalPages, currentPage }: TProps) => {
	const [value, setValue] = useState(currentPage);
	const router = useRouter();
	const { get } = useSearchParams();

	useEffect(() => {
		let active = true;
		debounce(() => {
			if (active && value && value !== currentPage) {
				router.push(`${route}/${value}?${focusInputParam}=true` as Route, {});
			}
		})();
		return () => {
			active = false;
		};
	}, [currentPage, route, router, value]);

	const keepFocus = get(focusInputParam) === "true";

	return (
		<div className="flex items-center gap-2">
			<Input
				value={value}
				max={totalPages}
				type="number"
				className="arrow-hide w-16"
				autoFocus={keepFocus}
				onChange={(e) => {
					const valueToNumber = parseInt(e.target.value);
					const valueRangeFixed = isNaN(valueToNumber)
						? 1
						: Math.max(1, Math.min(valueToNumber, totalPages));
					setValue(valueRangeFixed);
				}}
			/>
			<span> of {totalPages}</span>
		</div>
	);
};
