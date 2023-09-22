export { parseMoney } from "./parseMoney";
export { debounce } from "./debounce";
export { createQueryParams } from "./createQueryParams";
export const getMetadataTitle = (title?: string) => {
	return `${title ? `${title} - ` : ""}Next13Masters Shop`;
};
