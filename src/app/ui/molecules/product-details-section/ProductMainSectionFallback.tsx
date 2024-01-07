"use client";
import { ProductMainSection as ProductMainSection } from "./ProductMainSection";
import { Spinner } from "@/app/ui/atoms/Spinner";
import { useProductCache } from "@/app/services/product-cache.service";

export const ProductMainSectionFallback = () => {
	const { product } = useProductCache();
	return product ? (
		<ProductMainSection product={product} variantSelect={<Spinner />} />
	) : (
		<Spinner />
	);
};
