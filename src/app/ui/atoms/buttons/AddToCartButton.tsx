"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./shared/Button";

export const AddToCartButton = () => {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" variant="primary" isLoading={pending} dataTestid="add-to-cart-button">
			Add to cart
		</Button>
	);
};
