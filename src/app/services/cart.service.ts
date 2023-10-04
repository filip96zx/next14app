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
	let cart;
	try {
		cart = await getCartDetailsById(cartId);
	} catch (err: unknown) {
		if (err instanceof TypeError) {
			const cartNotFound = Boolean(
				Array.isArray(err.cause) &&
					err.cause?.find((c: { message: string }) => c?.message.includes?.("Cart not found")),
			);
			if (cartNotFound) {
				return null;
			}
		}
	}
	return cart;
}

export async function getCartTotalItemsByCookiesCartId() {
	const cartId = getCartIdFromCookies();
	if (!cartId) {
		return null;
	}
	let cart;
	try {
		cart = await getCartTotalItemsById(cartId);
	} catch (err: unknown) {
		if (err instanceof TypeError) {
			const cartNotFound = Boolean(
				Array.isArray(err.cause) &&
					err.cause?.find((c: { message: string }) => c?.message.includes?.("Cart not found")),
			);
			if (cartNotFound) {
				// cookies().delete("cartId");
				return null;
			}
			return null;
		}
	}
	return cart?.totalItems;
}
