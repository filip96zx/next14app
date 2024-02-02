import clsx from "clsx";

type TProps = {
	width?: string;
	height?: string;
	borderWidth?: string;
	className?: string;
	centered?: boolean;
};

export const Spinner = ({
	borderWidth = "4px",
	height = "24px",
	width = "24px",
	className,
	centered,
}: TProps) => {
	return (
		<div
			className={clsx(
				"animate-spin rounded-full border-gray-300 border-t-blue-600",
				className,
				centered && "absolute bottom-0 left-0 right-0 top-0 m-auto",
			)}
			style={{ height, width, borderWidth }}
			aria-busy
		/>
	);
};
