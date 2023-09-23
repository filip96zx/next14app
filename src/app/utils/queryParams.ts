export const createQueryParams = (
	params: Record<string, string | number | boolean | undefined>,
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
						.map(encodeURIComponent)
						.join("=")
				: "";
		})
		.join("&");
	return `?${queryParams}`;
};

export const goBackPath = "from";
