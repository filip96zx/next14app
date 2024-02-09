import { redirect } from "next/navigation";
import { Edit } from "lucide-react";
import { getTotalAmount } from "@/utils/cart";
import { getCartDetailByCookiesCartId } from "@/services/cart.service";
import { CloseModalAndNavigateButton } from "@/ui/atoms/buttons";
import { parseMoney } from "@/utils";
import { CartItemsList } from "@/ui/organisms/list";
import { ModalOverlay } from "@/ui/atoms/ModalOverlay";

export default async function CartModal() {
	const cart = await getCartDetailByCookiesCartId();
	if (!cart) {
		redirect("/");
	}
	const totalAmount = getTotalAmount(cart.items);
	const isEmpty = cart.items.length === 0;

	return (
		<div className="sticky bottom-0 left-0 right-0 top-0 z-50 flex overflow-hidden">
			<ModalOverlay className="h-screen flex-grow" />
			<div className="flex h-screen max-w-md flex-col bg-white p-5 shadow-lg">
				<div className="flex">
					<a href="/cart" title="Edit cart">
						<Edit />
					</a>
				</div>
				{isEmpty ? (
					<section>Cart is empty.</section>
				) : (
					<>
						<div className="flex-grow overflow-y-auto">
							<CartItemsList cart={cart} disableEditQuantity />
						</div>
						<div className="text-center">
							<CloseModalAndNavigateButton navigateTo="/payment">
								Go checkout {parseMoney(totalAmount)}
							</CloseModalAndNavigateButton>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
