// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ListResponse<T = any> = {
	content: Array<T>;
	totalElements: number;
} & { [key: string]: unknown };

export type OmitKeys<T, TKey extends keyof T> = Omit<T, TKey>;
