import { executeGraphql } from "@/api/executeGraphql";
import { UpdateOrderStatusDocument, type UpdateOrderStatusMutationVariables } from "@/gql/graphql";

export async function updateOrderStatus(params: UpdateOrderStatusMutationVariables) {
	const { orderUpdateStatus } = await executeGraphql({
		query: UpdateOrderStatusDocument,
		variables: params,
		cache: "no-cache",
	});
	return orderUpdateStatus;
}
