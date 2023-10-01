import { cookies } from "next/headers";
import { getCartDetailsById, getCartTotalItemsById } from "@/app/api";

export function getCartIdFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	return cartId;
}

export async function getCartDetailByCookiesCartId() {
	const cartId = getCartIdFromCookies();
	if (!cartId) {
		return null;
	}
	const cart = await getCartDetailsById(cartId);
	return cart;
}

export async function getCartTotalItemsByCookiesCartId() {
	const cartId = getCartIdFromCookies();
	if (!cartId) {
		return null;
	}
	const cart = await getCartTotalItemsById(cartId);
	if (!cart) {
		return null;
	}
	return cart.totalItems;
}
