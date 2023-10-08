type TProps = { content: string; children: React.ReactNode };

export const Label = ({ children, content }: TProps) => {
	return (
		<label>
			<span className="block">{content}</span>
			{children}
		</label>
	);
};
