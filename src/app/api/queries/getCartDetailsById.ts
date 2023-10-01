import { executeGraphql } from "@/app/api/executeGraphql";
import { CartGetDetailsByIdDocument } from "@/gql/graphql";

export async function getCartDetailsById(cartId: string) {
	const { order } = await executeGraphql(CartGetDetailsByIdDocument, { id: cartId });
	return order;
}
