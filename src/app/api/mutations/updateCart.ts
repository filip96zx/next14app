import { executeGraphql } from "@/app/api/executeGraphql";
import { CartUpdateDocument, type CartUpdateMutationVariables } from "@/gql/graphql";

export async function updateCart(params: CartUpdateMutationVariables) {
	const { orderItemsUpdate } = await executeGraphql(CartUpdateDocument, params);
	return orderItemsUpdate;
}
