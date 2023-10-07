import { executeGraphql } from "@/api/executeGraphql";
import { CartUpdateDocument, type CartUpdateMutationVariables } from "@/gql/graphql";

export async function updateCart(params: CartUpdateMutationVariables) {
	const { orderItemsUpdate } = await executeGraphql({
		query: CartUpdateDocument,
		variables: params,
		cache: "no-cache",
	});
	return orderItemsUpdate;
}
