"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { getCartIdFromCookies } from "../cart.service";
import { RevalidateTags } from "@/models";
import { type OrderItemInput } from "@/gql/graphql";
import { getCartById } from "@/api";
import { addToCart, createCart, updateOrderItem } from "@/api/mutations";

async function addItemsOrCreateCartWithItems(items: Array<OrderItemInput>) {
	const cartId = getCartIdFromCookies();
	if (cartId) {
		try {
			const cart = await getCartById(cartId);
			if (cart) {
				const updatedCart = await addToCart(cartId, items);
				if (!updatedCart) {
					throw new Error("Failed to update cart");
				}
				return updatedCart;
			}
		} catch {
			cookies().delete("cartId");
		}
	}
	const createdCart = await createCart(items);
	if (!createdCart) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", createdCart.id, { httpOnly: true, sameSite: "lax" });
	return createdCart;
}

export async function addToCartServerAction(productId: string, formData: FormData) {
	"use server";

	const quantity = formData.get("quantity")?.toString();
	const variantId = formData.get("variantId")?.toString();

	if (!quantity || !variantId || !productId) {
		throw new Error("Invalid quantity or variantId or productId");
	}

	const cart = await addItemsOrCreateCartWithItems([
		{
			productId,
			quantity: parseInt(quantity),
			variantId,
		},
	]);
	cookies().set("cartId", cart.id, { httpOnly: true, sameSite: "lax" });
}

export async function updateCartItemServerAction(orderItemId: string, quantity: number) {
	const updatedCart = await updateOrderItem(orderItemId, quantity);
	revalidateTag(RevalidateTags.CART);
	return updatedCart;
}
