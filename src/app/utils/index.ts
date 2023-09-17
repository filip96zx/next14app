export { parseMoney } from "./parseMoney";
export { debounce } from "./debounce";
export const getMetadataTitle = (title?: string) => {
	return `${title ? `${title} - ` : ""}Next13Masters Shop`;
};
