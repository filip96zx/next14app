type TProps = {
	children: React.ReactNode;
	"data-test-id"?: string;
};

export const ListLayout = ({ children, ...rest }: TProps) => {
	return (
		<ul
			data-test-id={rest["data-test-id"]}
			className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{children}
		</ul>
	);
};
