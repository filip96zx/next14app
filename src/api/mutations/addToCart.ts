import { executeGraphql } from "@/api/executeGraphql";
import { CartIncrementItemsDocument, type OrderItemInput } from "@/gql/graphql";

export async function addToCart(cartId: string, items: Array<OrderItemInput>) {
	const { orderItemsUpdate } = await executeGraphql({
		query: CartIncrementItemsDocument,
		variables: {
			id: cartId,
			items,
		},
		cache: "no-cache",
	});
	return orderItemsUpdate;
}
