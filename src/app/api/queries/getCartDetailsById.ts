import { executeGraphql } from "@/app/api/executeGraphql";
import { RevalidateTags } from "@/app/models";
import { CartGetDetailsByIdDocument } from "@/gql/graphql";

export async function getCartDetailsById(cartId: string) {
	const { order } = await executeGraphql({
		query: CartGetDetailsByIdDocument,
		variables: { id: cartId },
		next: { tags: [RevalidateTags.CART] },
	});
	return order;
}
