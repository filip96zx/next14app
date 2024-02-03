"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ProductDetails } from "./ProductDetails";
import { useProductCache } from "@/app/services/product-cache.service";
import { Spinner } from "@/app/ui/atoms/Spinner";

export function LoadingScreen() {
	const pathname = usePathname();
	const isProductPage = pathname.startsWith("/product/");
	const { product } = useProductCache();

	const showProduct = isProductPage && product;

	useEffect(() => {
		if (showProduct) {
			document.title = product.name;
		}
	}, [showProduct, product?.name]);

	return showProduct ? (
		<ProductDetails product={product} />
	) : (
		<Spinner width="36px" height="36px" centered />
	);
}
