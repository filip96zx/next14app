"use server";
import { revalidateTag } from "next/cache";
import { updateOrderItem } from "@/app/api/mutations";

export async function updateCartItemServerAction(orderItemId: string, quantity: number) {
	const updatedCart = await updateOrderItem(orderItemId, quantity);
	revalidateTag("cart");
	return updatedCart;
}
