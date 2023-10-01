"use server";
import { revalidateTag } from "next/cache";
import { updateOrderItem } from "@/app/api/mutations";
import { RevalidateTags } from "@/app/models";

export async function updateCartItemServerAction(orderItemId: string, quantity: number) {
	const updatedCart = await updateOrderItem(orderItemId, quantity);
	revalidateTag(RevalidateTags.CART);
	return updatedCart;
}
