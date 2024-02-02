import clsx from "clsx";
import { type ComponentProps } from "react";
import { inputClassName } from "./Input";

type TProps =
	| { children?: React.ReactNode; options?: undefined; optionClassName?: undefined }
	| {
			children?: undefined;
			options?: Array<{ name: string; value: string }>;
			optionClassName?: string;
	  };

export const Select = ({
	children,
	options,
	optionClassName,
	...props
}: Omit<ComponentProps<"select">, "children"> & TProps) => {
	const optionsElements = options
		? options.map((o) => (
				<option key={o.value} value={o.value} className={optionClassName}>
					{o.name}
				</option>
		  ))
		: undefined;

	return (
		<select {...props} className={clsx(inputClassName, props.className)}>
			{optionsElements || children}
		</select>
	);
};
