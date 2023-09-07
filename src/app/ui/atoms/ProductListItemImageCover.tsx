import { type TImage } from "@/app/ui/types";

export const ProductListItemImageCover = ({ alt, src }: TImage) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				className="obbject-center h-full w-full object-cover p-4 transition-transform hover:scale-105"
				width={320}
				height={320}
				src={src}
				alt={alt}
			/>
		</div>
	);
};
