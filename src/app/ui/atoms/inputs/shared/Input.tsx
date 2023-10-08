import clsx from "clsx";
import { type ComponentProps } from "react";
import { Label } from "./Label";

export const inputClassName =
	"rounded-md border border-gray-300 px-2 py-1 ring-gray-400 focus:outline-none focus:ring-1";

type TProps = {
	className?: string;
	variant?: "TEXT" | "TEXTAREA";
	label?: string;
};
export const Input = ({ label, ...props }: ComponentProps<"input"> & TProps) => {
	const Input = (
		<input
			aria-label="label"
			{...props}
			className={clsx(
				props.className,
				inputClassName,
				"invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500",
			)}
		/>
	);

	return label ? <Label content={label}>{Input}</Label> : Input;
};
