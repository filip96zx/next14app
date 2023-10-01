import { executeGraphql } from '@/app/api/executeGraphql';
import { CartGetByIdDocument } from '@/gql/graphql';

export async function getCartById(cartId: string) {
	const { order } = await executeGraphql(CartGetByIdDocument, { id: cartId });
	return order;
}