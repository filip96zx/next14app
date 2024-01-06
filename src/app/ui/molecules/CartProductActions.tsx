"use client";

import { useOptimistic } from "react";
import clsx from "clsx";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Button } from "@/app/ui/atoms/buttons";
import { type OrderItemFragment } from "@/gql/graphql";
import { updateCartItemServerAction } from "@/app/services/server-actions";

type TProps = {
	orderItem: OrderItemFragment;
};

const className = "px-3 py-1 rounded-md border border-gray-300 bg-gray-200";

export const CartProductActions = ({ orderItem }: TProps) => {
	const [quantity, setQuantity] = useOptimistic(orderItem.quantity);
	const isDecrementDisabled = quantity === 1;
	return (
		<form>
			<div className="flex items-center justify-center space-x-2">
				<Button
					type="submit"
					className={clsx(className, isDecrementDisabled && "opacity-30")}
					disabled={quantity === 1}
					formAction={async () => {
						const newQuantity = quantity - 1;
						setQuantity(newQuantity);
						await updateCartItemServerAction(orderItem.id, newQuantity);
					}}
					dataTestid="decrement"
				>
					<MinusIcon />
				</Button>
				<div className="inline-block w-8" data-testid="quantity">
					{quantity}
				</div>
				<Button
					type="submit"
					className={className}
					formAction={async () => {
						const newQuantity = quantity + 1;
						setQuantity(newQuantity);
						await updateCartItemServerAction(orderItem.id, newQuantity);
					}}
					dataTestid="increment"
				>
					<PlusIcon />
				</Button>
				<Button
					type="submit"
					className={className}
					formAction={() => updateCartItemServerAction(orderItem.id, 0)}
				>
					<TrashIcon />
				</Button>
			</div>
		</form>
	);
};
