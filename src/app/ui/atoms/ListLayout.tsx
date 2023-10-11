type TProps = {
	children: React.ReactNode;
	dataTestid?: string;
};

export const ListLayout = ({ children, dataTestid }: TProps) => {
	return (
		<ul
			data-testid={dataTestid}
			className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{children}
		</ul>
	);
};
