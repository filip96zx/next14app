type TProps = { alt: string; src: string };
export const ProductListItemImageCover = ({ alt, src }: TProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				width={320}
				height={320}
				src={src}
				alt={alt}
			/>
		</div>
	);
};
