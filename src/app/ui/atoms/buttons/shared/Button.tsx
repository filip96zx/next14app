import clsx from "clsx";
import { type ButtonHTMLAttributes } from "react";
import { primaryButtonClassName, secondaryButtonClassName } from "./style";

type ButtonVariant = "primary" | "secondary";
type TProps = {
	variant?: "primary" | "secondary";
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	additionalClassName?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	formAction?: ButtonHTMLAttributes<HTMLButtonElement>["formAction"];
	disabled?: boolean;
	dataTestid?: string;
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
	formAction,
	dataTestid,
	additionalClassName,
}: TProps) => {
	return (
		<button
			formAction={formAction}
			type={type}
			className={clsx(
				className || buttonVariants[variant],
				disabled && "opacity-60",
				additionalClassName,
			)}
			onClick={onClick}
			disabled={disabled}
			data-testid={dataTestid}
		>
			{children}
		</button>
	);
};
