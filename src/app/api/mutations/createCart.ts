import { executeGraphql } from "@/app/api/executeGraphql";
import { CartCreateDocument, type OrderItemInput } from "@/gql/graphql";

export async function createCart(items: Array<OrderItemInput>) {
	const { orderCreate } = await executeGraphql(CartCreateDocument, {
		items,
	});
	return orderCreate;
}
