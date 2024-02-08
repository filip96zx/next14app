"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ProductDetails } from "./ProductDetails";
import { useProductCache } from "@/services/product-cache.service";
import { Spinner } from "@/ui/atoms/Spinner";
import { getMetadataTitle } from "@/utils";

export function LoadingScreen() {
	const pathname = usePathname();
	const isProductPage = pathname.startsWith("/product/");
	const { product } = useProductCache();

	const showProduct = isProductPage && product;

	useEffect(() => {
		if (showProduct && product?.name) {
			document.title = getMetadataTitle(product.name);
		}
	}, [showProduct, product?.name]);

	return showProduct ? (
		<ProductDetails product={product} afterProductSection={<Spinner />} />
	) : (
		<Spinner width="36px" height="36px" centered />
	);
}
