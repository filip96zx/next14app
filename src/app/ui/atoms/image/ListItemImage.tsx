import NextImage from "next/image";

type TImageProps = { alt: string; src: string; width?: number; height?: number };

export const ListItemImage = ({ alt, src, width, height }: TImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<NextImage
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				width={width}
				height={height}
				src={src}
				alt={alt}
			/>
		</div>
	);
};
