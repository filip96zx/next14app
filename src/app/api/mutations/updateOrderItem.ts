import { executeGraphql } from "@/app/api/executeGraphql";
import { OrderItemUpdateDocument } from "@/gql/graphql";

export async function updateOrderItem(id: string, quantity: number) {
	const { orderItemUpdate } = await executeGraphql(OrderItemUpdateDocument, { id, quantity });
	return orderItemUpdate;
}
