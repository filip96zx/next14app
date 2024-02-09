"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./shared/Input";
import { createQueryParams, debounce } from "@/utils";

export const SearchInput = () => {
	const router = useRouter();

	const onChange = useCallback(
		(value: string) => {
			const queryParams = createQueryParams({ query: value });
			router.push(`/search?${queryParams.replace(/^\?/, "")}`);
		},
		[router],
	);

	return (
		<Input
			aria-label="Product search input"
			role="searchbox"
			className="w-50"
			onChange={(e) => debounce(onChange)(e.target.value)}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					const target = e.target as HTMLInputElement;
					onChange(target.value);
				}
			}}
		/>
	);
};
