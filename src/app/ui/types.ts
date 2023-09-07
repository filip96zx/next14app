export type TProduct = {
	id: string;
	name: string;
	category: string;
	price: number;
	image: TImage;
};

export type TImage = {
	src: string;
	alt: string;
};
