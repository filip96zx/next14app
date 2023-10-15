import clsx from "clsx";
import { inputClassName } from "./Input";
import { Label } from "@/app/ui/atoms/inputs/shared/Label";

type TProps = {
	className?: string;
	label?: string;
};

export const TextArea = ({
	className,
	label,
	...props
}: TProps & React.ComponentPropsWithoutRef<"textarea">) => {
	const Input = <textarea {...props} className={clsx(className, inputClassName, "w-full")} />;
	return label ? <Label content={label}>{Input}</Label> : Input;
};
