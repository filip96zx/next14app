import { executeGraphql } from "@/app/api/executeGraphql";
import { CartIncrementItemsDocument, type OrderProductInput } from "@/gql/graphql";

export async function addToCart(cartId: string, items: Array<OrderProductInput>) {
	const { orderItemsUpdate } = await executeGraphql(CartIncrementItemsDocument, {
		id: cartId,
		items,
	});
	return orderItemsUpdate;
}
