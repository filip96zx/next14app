"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ProductMainSection as ProductMainSection } from "./ProductMainSection";
import { Spinner } from "@/ui/atoms/Spinner";
import { useProductCache } from "@/services/product-cache.service";
import { BackButton } from "@/ui/atoms/buttons";
import { getMetadataTitle } from "@/utils";

export const ProductMainSectionFallback = () => {
	const { product } = useProductCache();
	const pathname = usePathname();
	const isProductPage = pathname.includes("/product/");

	const showProduct = product && isProductPage;

	useEffect(() => {
		if (showProduct) {
			document.title = getMetadataTitle(product.name);
		}
	}, [product?.name, showProduct]);
	return showProduct ? (
		<div className="flex flex-col  items-center justify-center gap-5">
			<div>
				<BackButton href={"/products"} keepSearchParams>
					{"All products"}
				</BackButton>
			</div>
			<ProductMainSection product={product} variantSelect={<Spinner />} />
		</div>
	) : (
		<Spinner />
	);
};
