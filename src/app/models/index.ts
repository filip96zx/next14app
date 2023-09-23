// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ListResponse<T = any> = {
	content: Array<T>;
	totalElements: number;
} & { [key: string]: unknown };
