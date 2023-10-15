import clsx from "clsx";
import { type ButtonHTMLAttributes } from "react";
import { primaryButtonClassName, secondaryButtonClassName } from "./style";
import { Spinner } from "@/app/ui/atoms/Spinner";

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
	isLoading?: boolean;
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
	isLoading,
}: TProps) => {
	return (
		<button
			formAction={formAction}
			type={type}
			className={clsx(
				className || buttonVariants[variant],
				disabled && "opacity-60",
				additionalClassName,
				"relative",
			)}
			onClick={onClick}
			disabled={disabled || isLoading}
			data-testid={dataTestid}
		>
			{isLoading && (
				<>
					<div className="absolute bottom-0 left-0 top-0 h-full w-full rounded-md bg-slate-50 opacity-40"></div>
					<Spinner className="absolute bottom-0 left-0 right-0 top-0 m-auto border-blue-100" />
				</>
			)}
			{children}
		</button>
	);
};
