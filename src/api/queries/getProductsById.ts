import { executeGraphql } from "@/api/executeGraphql";
import { ProductGetByIdDocument } from "@/gql/graphql";

export const getProductById = async (id: string) => {
	const { product } = await executeGraphql({ query: ProductGetByIdDocument, variables: { id } });
	return product;
};
