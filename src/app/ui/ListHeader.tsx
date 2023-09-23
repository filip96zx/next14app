type TProps = {
	children: React.ReactNode;
};

export const ListHeader = ({ children }: TProps) => {
	return <h1 className="text-2xl font-semibold text-gray-900">{children}</h1>;
};
