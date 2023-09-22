import { executeGraphql } from "@/app/api/executeGraphql";
import { ProductGetByIdDocument } from "@/gql/graphql";

export const getProductById = async (id: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id });
	return product;
};
