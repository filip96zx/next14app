"use client";

import clsx from "clsx";
import { type Route } from "next";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { createQueryParams } from "@/app/utils";

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

const getSearchParamsFromHref = (href: string) => {
	const indexOfQueryParamsStart = href.indexOf("?");
	if (indexOfQueryParamsStart === -1) return "";
	const searchParams = href.slice(indexOfQueryParamsStart + 1);
	return searchParams;
};

const getPathnameFromHref = (href: string) => {
	const indexOfQueryParamsStart = href.indexOf("?");
	if (indexOfQueryParamsStart === -1) return href;
	const pathname = href.slice(0, indexOfQueryParamsStart);
	return pathname;
};

const convertSearchParamsToObject = (searchParams: string) => {
	const searchParamsNames = /(^[\w\d]*=|&[\w\d]*?=)/;
	const separatedSearchParamsAndNames = searchParams.split(searchParamsNames).slice(1);

	const removeTrailingSpecialChars = (name: string) => name.replace(/^&|=$/, "");

	const searchParamsObject = separatedSearchParamsAndNames.reduce(
		(acc, curr, index) => {
			if (index % 2 === 0) {
				acc[removeTrailingSpecialChars(curr)] = separatedSearchParamsAndNames[index + 1];
			}
			return acc;
		},
		{} as Record<string, string | undefined>,
	);
	return searchParamsObject;
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
	const currentParams = convertSearchParamsToObject(decodeURIComponent(searchParams.toString()));

	const isActive = exact ? currentPath + searchParams === href : currentPath.startsWith(href);

	return (
		<Link
			href={
				keepSearchParams
					? ((getPathnameFromHref(href) +
							createQueryParams({ ...currentParams, ...paramsFromHref })) as Route<T>)
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
