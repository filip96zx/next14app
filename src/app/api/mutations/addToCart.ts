import { executeGraphql } from "@/app/api/executeGraphql";
import { CartIncrementItemsDocument, type OrderItemInput } from "@/gql/graphql";

export async function addToCart(cartId: string, items: Array<OrderItemInput>) {
	const { orderItemsUpdate } = await executeGraphql(CartIncrementItemsDocument, {
		id: cartId,
		items,
	});
	return orderItemsUpdate;
}
