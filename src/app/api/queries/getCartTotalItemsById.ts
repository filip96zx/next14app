import { executeGraphql } from "@/app/api/executeGraphql";
import {  CartGetTotalItemsByIdDocument } from "@/gql/graphql";

export async function CartGetTotalItemsById(cartId: string) {
	const { order } = await executeGraphql(CartGetTotalItemsByIdDocument, { id: cartId });
	return order;
}
