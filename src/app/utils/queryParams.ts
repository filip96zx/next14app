export const createQueryParams = (params: Record<string, string | number | boolean>) => {
	const queryParams = Object.entries(params)
		.map((entry) => {
			return entry[1] ? entry.map(encodeURIComponent).join("=") : "";
		})
		.join("&");
	return `?${queryParams}`;
};

export const goBackPath = "from";

export const createGoBackParams = ({
	goBackParams,
	paramName = goBackPath,
}: {
	goBackParams?: string | number;
	currentParams?: string;
	paramName?: string;
}) => {
	return goBackParams ? createQueryParams({ [paramName]: goBackParams }) : "";
};
