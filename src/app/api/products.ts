import { type TProduct } from "@/app/types";

const apiURL = "https://naszsklep-api.vercel.app/api";

export interface ProductDTO {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
}

export interface Rating {
	rate: number;
	count: number;
}

const parseProductDTOToTProduct = (product: ProductDTO): TProduct => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		image: {
			src: product.image,
			alt: product.title,
		},
		description: product.description,
	};
};

export const getProductById = async (id: string): Promise<TProduct> => {
	const response = await fetch(`${apiURL}/products/${id}`);
	const product = (await response.json()) as ProductDTO;
	return parseProductDTOToTProduct(product);
};

type GetProductsSearchParams = {
	pageSize: number;
	page: number;
};

export const getProducts = async ({
	pageSize,
	page,
}: GetProductsSearchParams): Promise<TProduct[]> => {
	const response = await fetch(`${apiURL}/products?take=${pageSize}&offset=${pageSize * page}`);
	const products = (await response.json()) as ProductDTO[];
	return products.map(parseProductDTOToTProduct);
};
