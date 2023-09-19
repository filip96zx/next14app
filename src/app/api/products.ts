import { type TProduct } from "@/app/types";
import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";

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
const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables?: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL is not defined");
	}
	const response = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	});
	type GraphqlResponse<T> =
		| {
				data: T;
				errors?: undefined;
		  }
		| { data?: undefined; errors: Array<{ message: string }> };

	const graphqlResponse = (await response.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new TypeError(`GraphQL error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
const parseProductDTOToTProduct = (product: {
	id: string;
	name: string;
	price: number;
	description: string;
	images: {
		url: string;
	}[];
}): TProduct => {
	return {
		id: product.id,
		name: product.name,
		category: "category",
		price: product.price,
		image: {
			src: product.images[0].url,
			alt: product.name,
		},
		description: product.description,
	};
};

export const getProductById = async (id: string): Promise<TProduct> => {
	const response = await fetch(`${apiURL}/products/${id}`);
	const product = (await response.json()) as ProductDTO;
	//@ts-ignore
	return parseProductDTOToTProduct(product);
};

export type GetProductsSearchParams = {
	pageSize: number;
	page: number;
};

export const getProductsList = async ({
	pageSize,
	page,
}: GetProductsSearchParams): Promise<TProduct[]> => {
	// const response = await fetch(`${apiURL}/products?take=${pageSize}&offset=${pageSize * page}`);
	const { products } = await executeGraphql(ProductsGetListDocument, {});
	// const products = (await response.json()) as ProductDTO[];

	return products.map(parseProductDTOToTProduct);
};
