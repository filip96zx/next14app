"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import clsx from "clsx";
import { Button } from "./shared/Button";

export const AddToCartButton = () => {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			variant="primary"
			additionalClassName={clsx(pending && "cursor-wait")}
			disabled={pending}
			dataTestid="add-to-cart-button"
		>
			Add to cart
		</Button>
	);
};
