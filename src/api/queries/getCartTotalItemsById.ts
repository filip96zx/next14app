import { executeGraphql } from "@/api/executeGraphql";
import { RevalidateTags } from "@/models";
import { CartGetTotalItemsByIdDocument } from "@/gql/graphql";

export async function getCartTotalItemsById(cartId: string) {
	const { order } = await executeGraphql({
		query: CartGetTotalItemsByIdDocument,
		variables: { id: cartId },
		next: { tags: [RevalidateTags.CART] },
	});
	return order;
}
