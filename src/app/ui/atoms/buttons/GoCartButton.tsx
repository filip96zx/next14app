import clsx from "clsx";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { getCartTotalItemsByCookiesCartId } from "@/app/services/cart.service";

export const GoCartButton = async () => {
	const totalItems = await getCartTotalItemsByCookiesCartId();

	const isCartDisabled = !totalItems;

	const CartButtonContent = (
		<span
			className={clsx(isCartDisabled && "opacity-40", "relative w-7")}
			{...(isCartDisabled && { "aria-disabled": true })}
		>
			<ShoppingCartIcon className="inline-block" />
			<Suspense>
				<span className="left-100 absolute ml-2">{!!totalItems && totalItems}</span>
			</Suspense>
		</span>
	);
	return isCartDisabled ? CartButtonContent : <Link href="/cart">{CartButtonContent}</Link>;
};
