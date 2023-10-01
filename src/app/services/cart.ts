import { cookies } from "next/headers";
import { type OrderProductInput } from "@/gql/graphql";
import { getCartById, getCartDetailsById } from "@/app/api";
import { addToCart, createCart } from "@/app/api/mutations";

function getCartIdFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	return cartId;
}

export async function updateOrCreateCartWithItems(items: Array<OrderProductInput>) {
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

export async function getCartDetailByCookiesCartId() {
	const cartId = getCartIdFromCookies();
	if (!cartId) {
		return null;
	}
	const cart = await getCartDetailsById(cartId);
	return cart;
}
