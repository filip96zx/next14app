export { parseMoney } from "./parseMoney";
export { debounce, cancelDebounce } from "./debounce";
export { createQueryParams, goBackPath, createPaginationParams } from "./queryParams";
export { handleForwardSearchParams } from "./searchParamsForwarding";
export { handleResponseError } from "./handleResponseError";

export const getMetadataTitle = (title?: string) => {
	return `${title ? `${title} - ` : ""}Next13Masters Shop`;
};
