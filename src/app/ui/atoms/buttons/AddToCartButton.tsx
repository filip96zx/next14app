"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import clsx from "clsx";
import { Button } from "./shared/Button";

type TProps = {};

export const AddToCartButton = ({}: TProps) => {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			variant="primary"
			additionalClassName={clsx(pending && "cursor-wait")}
			disabled={pending}
		>
			Add to cart
		</Button>
	);
};
