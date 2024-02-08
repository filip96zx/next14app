import clsx from "clsx";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { getCartTotalItemsByCookiesCartId } from "@/services/cart.service";

export const GoCartButton = async () => {
	const totalItems = await getCartTotalItemsByCookiesCartId();

	const isCartDisabled = !totalItems;

	const CartButtonContent = (
		<span
			className={clsx(isCartDisabled && "opacity-40", "relative w-7")}
			{...(isCartDisabled && { "aria-disabled": true })}
		>
			<ShoppingCartIcon className="inline-block" />

			<span className="left-100 absolute ml-2">{!!totalItems && totalItems}</span>
		</span>
	);
	return isCartDisabled ? CartButtonContent : <Link href="/cart">{CartButtonContent}</Link>;
};
