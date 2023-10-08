import clsx from "clsx";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { getCartTotalItemsByCookiesCartId } from "@/app/services/cart.service";

export const GoCartButton = async () => {
	const totalItems = await getCartTotalItemsByCookiesCartId();

	const isCartDisabled = !totalItems;

	const CartButtonContent = (
		<span className={clsx(isCartDisabled && "opacity-40", "w-7")} aria-disabled>
			<ShoppingCartIcon className="inline-block" />{" "}
			<Suspense>{!!totalItems && totalItems}</Suspense>
		</span>
	);
	return isCartDisabled ? CartButtonContent : <Link href="/cart">{CartButtonContent}</Link>;
};
