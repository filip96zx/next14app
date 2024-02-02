export enum RevalidateTags {
	CART = "cart",
	PRODUCT_RATING = "product_rating",
	PRODUCT = "product",
	PRODUCT_LIST = "product_list",
}

type RevalidateWithParam<T extends string> = {
	tag: T;
	param?: string;
};

type RevalidateTagsWithParamsUnion =
	| RevalidateWithParam<RevalidateTags.PRODUCT>
	| RevalidateWithParam<RevalidateTags.PRODUCT_RATING>;
export const getTagToRevalidate = ({ param, tag }: RevalidateTagsWithParamsUnion) =>
	`${tag}-${param}`;
