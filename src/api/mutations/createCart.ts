import { executeGraphql } from "@/api/executeGraphql";
import { CartCreateDocument, type OrderItemInput } from "@/gql/graphql";

export async function createCart(items: Array<OrderItemInput>) {
	const { orderCreate } = await executeGraphql({
		query: CartCreateDocument,
		variables: {
			items,
		},
	});
	return orderCreate;
}
