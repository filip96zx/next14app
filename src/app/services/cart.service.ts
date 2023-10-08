import { cookies } from "next/headers";
import { getCartDetailsById } from "@/api";
import { handleResponseError } from "@/app/utils";

export function getCartIdFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	return cartId;
}
export async function getCartDetailByCookiesCartId() {
	const cartId = getCartIdFromCookies();
	if (!cartId) {
		return null;
	}
	const cartResponse = await handleResponseError(getCartDetailsById(cartId));
	if (cartResponse.error) {
		return null;
	}
	return cartResponse.data;
}

export async function getCartTotalItemsByCookiesCartId() {
	const cartId = getCartIdFromCookies();
	if (!cartId) {
		return null;
	}
	const cartResponse = await handleResponseError(getCartDetailsById(cartId));
	if (cartResponse.error) {
		return null;
	}
	return cartResponse.data?.totalItems;
}
