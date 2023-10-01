"use server";

import { cookies } from "next/headers";
import { type OrderItemInput } from "@/gql/graphql";
import { getCartById, getCartDetailsById } from "@/app/api";
import { addToCart, createCart, updateOrderItem } from "@/app/api/mutations";

function getCartIdFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	return cartId;
}

async function addItemsOrCreateCartWithItems(items: Array<OrderItemInput>) {
	const cartId = getCartIdFromCookies();
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			const updatedCart = await addToCart(cartId, items);
			if (!updatedCart) {
				throw new Error("Failed to update cart");
			}
			return updatedCart;
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
	"use server";
	const updatedCart = await updateOrderItem(orderItemId, quantity);

	return updatedCart;
}

export async function getCartDetailByCookiesCartId() {
	const cartId = getCartIdFromCookies();
	if (!cartId) {
		return null;
	}
	const cart = await getCartDetailsById(cartId);
	return cart;
}
