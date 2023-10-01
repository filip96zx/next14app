import { redirect } from "next/navigation";
import { getCartDetailByCookiesCartId } from "@/app/services/cart";

export default async function CartPage() {
	const cart = await getCartDetailByCookiesCartId();
	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Cart</h1>
			<p>Cart page</p>
			<pre>{JSON.stringify(cart, null, 2)}</pre>
		</div>
	);
}
