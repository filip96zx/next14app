"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./shared/Input";
import { createQueryParams, debounce } from "@/app/utils";

export const SearchInput = () => {
	const router = useRouter();

	const onChange = useCallback(
		(value: string) => {
			const queryParams = createQueryParams({ query: value });
			router.push(`/search/1${queryParams}`);
		},
		[router],
	);

	return (
		<div className="flex items-center gap-2">
			<Input
				className="w-50"
				onChange={(e) => debounce(onChange)(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						const target = e.target as HTMLInputElement;
						onChange(target.value);
					}
				}}
			/>
		</div>
	);
};
