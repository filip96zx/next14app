import { executeGraphql } from "@/api/executeGraphql";
import { CartGetByIdDocument } from "@/gql/graphql";

export async function getCartById(cartId: string) {
	const { order } = await executeGraphql({ query: CartGetByIdDocument, variables: { id: cartId } });
	return order;
}
