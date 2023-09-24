export { parseMoney } from "./parseMoney";
export { debounce } from "./debounce";
export { createQueryParams, goBackPath, createPaginationParams } from "./queryParams";
export const getMetadataTitle = (title?: string) => {
	return `${title ? `${title} - ` : ""}Next13Masters Shop`;
};
