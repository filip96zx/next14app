import { executeGraphql } from "@/api/executeGraphql";
import { RevalidateTags, getTagToRevalidate } from "@/app/models";
import { ProductGetByIdDocument } from "@/gql/graphql";

export const getProductById = async (id: string) => {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id },
		next: {
			tags: [getTagToRevalidate({ param: id, tag: RevalidateTags.PRODUCT })],
		},
		cache: "force-cache",
	});
	return product;
};
