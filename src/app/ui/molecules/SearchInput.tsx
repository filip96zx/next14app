"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { type Route } from "next";
import { Input } from "@/app/ui/atoms/Input";
import { createQueryParams, debounce } from "@/app/utils";

export const SearchInput = () => {
	const router = useRouter();

	const onChange = useCallback(
		debounce((value: string) => {
			const queryParams = createQueryParams({ query: value });
			router.push(`/search/2${queryParams}` as Route);
		}),
		[],
	);

	return (
		<div className="flex items-center gap-2">
			<Input className="w-16" onChange={(e) => onChange(e.target.value)} />
		</div>
	);
};
