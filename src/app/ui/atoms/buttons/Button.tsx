import clsx from "clsx";
import { primaryButtonClassName, secondaryButtonClassName } from "./shared/style";

type ButtonVariant = "primary" | "secondary";
type TProps = {
	variant?: "primary" | "secondary";
	children: React.ReactNode;
};

const buttonVariants: { [key in ButtonVariant]: string } = {
	primary: primaryButtonClassName,
	secondary: secondaryButtonClassName,
};

export const Button = ({ children, variant = "secondary" }: TProps) => {
	return <button className={clsx(buttonVariants[variant])}>{children}</button>;
};
