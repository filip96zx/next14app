"use client";

import clsx from "clsx";
import { type Route } from "next";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { createQueryParams } from "@/app/utils";
import { BackFormerPageParamName } from "@/app/models";

type TProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
	keepSearchParams?: boolean;
	forceActive?: boolean;
	scroll?: boolean;
};

const getPathnameFromHref = (href: string) => {
	const indexOfQueryParamsStart = href.indexOf("?");
	if (indexOfQueryParamsStart === -1) return href;
	const pathname = href.slice(0, indexOfQueryParamsStart);
	return pathname;
};

const getSearchParamsFromHref = (href: string) => {
	const indexOfQueryParamsStart = href.indexOf("?");
	if (indexOfQueryParamsStart === -1) return "";
	const searchParams = href.slice(indexOfQueryParamsStart + 1);
	return searchParams;
};

const recursiveDecode = (searchParams: string): string => {
	const decodedSearchParams = decodeURIComponent(searchParams);
	const newSearch = getSearchParamsFromHref(decodedSearchParams);

	if (!newSearch) return decodedSearchParams;

	return `${getPathnameFromHref(searchParams)}?${recursiveDecode(newSearch)}`;
};

const convertSearchParamsToObject = (searchParams: string) => {
	const searchParamsNames = /(^[\w\d]*=|&[\w\d]*?=)/;

	const decodedSearchParams = decodeURIComponent(searchParams);
	const separatedSearchParamsAndNames = decodedSearchParams.split(searchParamsNames).slice(1);

	const removeTrailingSpecialChars = (name: string) => name.replace(/^&|=$/g, "");

	const searchParamsObject = separatedSearchParamsAndNames.reduce(
		(acc, curr, index) => {
			if (index % 2 === 0) {
				acc[removeTrailingSpecialChars(curr)] = decodeURIComponent(
					separatedSearchParamsAndNames[index + 1] as string,
				);
			}
			return acc;
		},
		{} as Record<string, string | undefined>,
	);
	if (!searchParamsObject.from || typeof searchParamsObject.from !== "string") {
		return searchParamsObject;
	}
	return {
		...searchParamsObject,
		from: recursiveDecode(searchParamsObject.from),
	};
};

export function ActiveLink<T extends string>({
	children,
	href,
	exact,
	keepSearchParams,
	className = "mt-2 text-blue-500 hover:text-blue-700",
	activeClassName = "border-b border-blue-500",
	scroll,
	forceActive,
}: TProps<T>) {
	const currentPath = usePathname();
	const searchParams = useSearchParams().toString();

	const paramsFromHref = convertSearchParamsToObject(getSearchParamsFromHref(href));
	const currentParams = convertSearchParamsToObject(searchParams);

	const isActive = exact ? currentPath + searchParams === href : currentPath.startsWith(href);

	return (
		<Link
			href={
				keepSearchParams
					? ((getPathnameFromHref(href) +
							createQueryParams(
								{ ...currentParams, ...paramsFromHref },
								{ omitKeysEncode: [BackFormerPageParamName.FROM] },
							)) as Route<T>)
					: href
			}
			className={clsx(className, (isActive || forceActive) && activeClassName)}
			role="link"
			scroll={scroll}
		>
			{children}
		</Link>
	);
}
