type TProps = {
	rating: number;
};

export const RatingStars = ({ rating }: TProps) => {
	const backgroundGradient = (value: number) =>
		`linear-gradient(90deg, gold ${(value / 5) * 100}%, rgba(0, 0, 0, 0.2) ${(value / 5) * 100}%`;
	return (
		<meter
			className="h-auto w-auto appearance-none text-2xl"
			min="0"
			max="5"
			value={rating}
			title={`${rating.toFixed(2)} out of 5 stars`}
		>
			<div
				style={{
					backgroundImage: backgroundGradient(rating),
				}}
				className="w-min bg-clip-text text-[transparent]"
			>
				★★★★★
			</div>
		</meter>
	);
};
