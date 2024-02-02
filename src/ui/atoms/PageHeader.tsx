type TProps = {
	children: React.ReactNode;
};

export const PageHeader = ({ children }: TProps) => {
	return (
		<h1 className="text-2xl font-semibold text-gray-900" role="heading">
			{children}
		</h1>
	);
};
