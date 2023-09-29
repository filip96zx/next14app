import NextImage from "next/image";
import { ListImageCard } from "./shared/ListImageCard";

type Nullable<T> = T | null | undefined;

type TImageProps = {
	alt?: Nullable<string>;
	src?: Nullable<string>;
	width?: Nullable<number>;
	height?: Nullable<number>;
};

export const ListItemImage = ({ alt, src, width, height }: TImageProps) => {
	return (
		<ListImageCard>
			{src && alt && width && height && (
				<NextImage
					className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
					width={width}
					height={height}
					src={src}
					alt={alt}
				/>
			)}
		</ListImageCard>
	);
};
