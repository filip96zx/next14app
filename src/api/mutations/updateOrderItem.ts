import { executeGraphql } from "@/api/executeGraphql";
import { OrderItemUpdateDocument } from "@/gql/graphql";

export async function updateOrderItem(id: string, quantity: number) {
	const { orderItemUpdate } = await executeGraphql({
		query: OrderItemUpdateDocument,
		variables: { id, quantity },
		cache: "no-cache",
	});
	return orderItemUpdate;
}
