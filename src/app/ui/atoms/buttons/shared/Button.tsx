import clsx from "clsx";
import { type ButtonHTMLAttributes } from "react";
import { primaryButtonClassName, secondaryButtonClassName } from "./style";

type ButtonVariant = "primary" | "secondary";
type TProps = {
	variant?: "primary" | "secondary";
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	disabled?: boolean;
};

const buttonVariants: { [key in ButtonVariant]: string } = {
	primary: primaryButtonClassName,
	secondary: secondaryButtonClassName,
};

export const Button = ({
	children,
	variant = "secondary",
	onClick,
	className,
	type,
	disabled,
}: TProps) => {
	return (
		<button
			type={type}
			className={clsx(buttonVariants[variant], disabled && "opacity-75", className)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
