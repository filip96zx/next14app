type TProps = {
	children: React.ReactNode;
};

export const ListImageCard = ({ children }: TProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			{children}
		</div>
	);
};
