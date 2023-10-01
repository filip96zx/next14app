"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import clsx from "clsx";
import { Button } from "@/app/ui/atoms/buttons";
import { type OrderItemFragment } from "@/gql/graphql";
import { updateCartItemServerAction } from "@/app/services/server-actions";

type TProps = {
	orderItem: OrderItemFragment;
};

const className = "px-3 py-1 rounded-md border border-gray-300 bg-gray-200";

export const ProductQuantityChangeInput = ({ orderItem }: TProps) => {
	const [quantity, setQuantity] = useOptimistic(orderItem.quantity);
	const isDecrementDisabled = quantity === 1;
	return (
		<div className="flex items-center justify-center space-x-2">
			<form>
				<Button
					type="submit"
					className={clsx(className, isDecrementDisabled && "opacity-30")}
					disabled={quantity === 1}
					formAction={async () => {
						const newQuantity = quantity - 1;
						setQuantity(newQuantity);
						await updateCartItemServerAction(orderItem.id, newQuantity);
					}}
				>
					-
				</Button>
				<span>{quantity}</span>
				<Button
					type="submit"
					className={className}
					formAction={async () => {
						const newQuantity = quantity + 1;
						setQuantity(newQuantity);
						await updateCartItemServerAction(orderItem.id, newQuantity);
					}}
				>
					+
				</Button>
				<Button
					type="submit"
					className={className}
					formAction={() => updateCartItemServerAction(orderItem.id, 0)}
				>
					delete
				</Button>
			</form>
		</div>
	);
};
