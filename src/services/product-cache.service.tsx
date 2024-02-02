"use client";
import { type SetStateAction, createContext, useState, useContext } from "react";

import { type ProductListItemFragment } from "@/gql/graphql";

const ProductCacheContext = createContext<{
	product: ProductListItemFragment | null;
	setProduct: React.Dispatch<SetStateAction<ProductListItemFragment | null>>;
}>({ product: null, setProduct: () => null });

export const ProductCacheContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [product, setProduct] = useState<ProductListItemFragment | null>(null);
	return (
		<ProductCacheContext.Provider value={{ product, setProduct }}>
			{children}
		</ProductCacheContext.Provider>
	);
};

export const useSetProductCache = () => {
	const { setProduct } = useContext(ProductCacheContext);
	return { setProduct };
};

export const useProductCache = () => {
	const { product } = useContext(ProductCacheContext);
	return { product };
};
