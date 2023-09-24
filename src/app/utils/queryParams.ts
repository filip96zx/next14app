export const createQueryParams = (
	params: Record<string, string | number | boolean | undefined>,
	options?: { omitKeysEncode?: string[] },
) => {
	const queryParams = Object.entries(params)
		.map((entry) => {
			if (entry[1] === undefined) {
				return "";
			}
			return entry[1]
				? entry
						.filter((param): param is string | boolean | number => {
							if (param === undefined) {
								return false;
							}
							return true;
						})
						.map((value) =>
							options?.omitKeysEncode?.includes(entry[0]) ? value : encodeURIComponent(value),
						)
						.join("=")
				: "";
		})
		.join("&");
	return queryParams ? `?${queryParams}` : "";
};

export const goBackPath = "from";

export const createPaginationParams = ({
	params,
	searchParamsPagination,
}: {
	params: {
		page: number;
	} & Parameters<typeof createQueryParams>[0];
	searchParamsPagination?: boolean;
}) => {
	const { page, ...restParams } = params;
	return searchParamsPagination
		? createQueryParams(params)
		: `/${page}${createQueryParams(restParams)}`;
};
