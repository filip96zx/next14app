"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { getCartIdFromCookies } from "../cart.service";
import { RevalidateTags } from "@/app/models";
import { type OrderItemInput } from "@/gql/graphql";
import { getCartById } from "@/app/api";
import { addToCart, createCart, updateOrderItem } from "@/app/api/mutations";

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
export async function addToCartServerAction(productId: string, formData: unknown) {
	"use server";
	type FromData = {
		productId: string;
		variantId: string;
		quantity: string;
	};
	const data = formData as Map<keyof FromData, string>;
	const cart = await addItemsOrCreateCartWithItems([
		{
			productId,
			quantity: parseInt(data.get("quantity")!),
			variantId: data.get("variantId")!,
		},
	]);
	cookies().set("cartId", cart.id, { httpOnly: true, sameSite: "lax" });
}

export async function updateCartItemServerAction(orderItemId: string, quantity: number) {
	const updatedCart = await updateOrderItem(orderItemId, quantity);
	revalidateTag(RevalidateTags.CART);
	return updatedCart;
}
