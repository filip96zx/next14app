
export const handleResponseError = async <T>(
	callback: Promise<T>,
): Promise<{ data: T; error?: undefined } | { data?: undefined; error: string }> => {
	let responseData: T = {} as T;
	try {
		responseData = await callback;
	} catch (err: unknown) {
		if (err instanceof TypeError) {
			if (err.message) {
				return { error: err.message };
			}
			if (Array.isArray(err.cause)) {
				return { error: err.cause?.map((c: { message: string }) => c?.message).join(", ") };
			}
			return { error: "Unknown error" };
		}
	}
	return { data: responseData };
};