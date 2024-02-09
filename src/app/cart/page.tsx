import { redirect } from "next/navigation";
import Link from "next/link";
import { getCartDetailByCookiesCartId } from "@/services/cart.service";
import { parseMoney } from "@/utils";
import { PageHeader } from "@/ui/atoms/PageHeader";
import { Button } from "@/ui/atoms/buttons";
import { CartItemsList } from "@/ui/organisms/list";
import { getCheckoutButtonLabel, getTotalAmount } from "@/utils/cart";

export default async function CartPage() {
	const cart = await getCartDetailByCookiesCartId();
	if (!cart) {
		redirect("/");
	}
	const totalAmount = getTotalAmount(cart.items);
	const isEmpty = cart.items.length === 0;
	return (
		<div>
			<PageHeader>Cart</PageHeader>

			{isEmpty ? (
				<section>Cart is empty.</section>
			) : (
				<div className="flex flex-col gap-10">
					<CartItemsList cart={cart} />
					<div className="flex flex-row-reverse">
						<Link href="/payment">
							<Button variant="primary">{getCheckoutButtonLabel(parseMoney(totalAmount))}</Button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
