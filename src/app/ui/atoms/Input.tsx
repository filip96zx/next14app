import clsx from "clsx";
import { type ComponentProps } from "react";

export const Input = (props: ComponentProps<"input"> & { className?: string }) => {
	return (
		<input
			{...props}
			className={clsx(
				props.className,
				"rounded-md border border-gray-300 px-2 py-1 ring-gray-400 focus:outline-none focus:ring-1",
			)}
		/>
	);
};
