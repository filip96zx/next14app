import { executeGraphql } from "@/app/api/executeGraphql";
import { CartCreateDocument, type OrderProductInput } from "@/gql/graphql";

export async function createCart(items: Array<OrderProductInput>) {
	const { orderCreate } = await executeGraphql(CartCreateDocument, {
		items,
	});
	return orderCreate;
}
