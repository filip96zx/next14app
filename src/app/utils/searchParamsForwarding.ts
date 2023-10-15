import { createQueryParams } from "./queryParams";
import { BackFormerPageParamName } from "@/app/models";

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
	const { from, ...restParams } = searchParamsObject;
	return {
		from: from,
		...restParams,
	};
};

export const handleForwardSearchParams = (
	href: string,
	currentSearchParams: string = "",
	currentSearchObject?: Record<string, string>,
) => {
	const hrefSearchParamsObject = convertSearchParamsToObject(getSearchParamsFromHref(href));
	const currentSearchParamsObject = convertSearchParamsToObject(currentSearchParams);

	const newSearchParams = createQueryParams(
		{
			...(currentSearchObject || currentSearchParamsObject),
			...hrefSearchParamsObject,
		},
		{ omitKeysEncode: [BackFormerPageParamName.FROM] },
	);
	return `${getPathnameFromHref(href)}${newSearchParams}`;
};
