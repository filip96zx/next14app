"use client";
import { usePathname } from "next/navigation";
import { ProductMainSection as ProductMainSection } from "./ProductMainSection";
import { Spinner } from "@/ui/atoms/Spinner";
import { useProductCache } from "@/services/product-cache.service";
import { BackButton } from "@/ui/atoms/buttons";

export const ProductMainSectionFallback = () => {
	const { product } = useProductCache();
	const pathname = usePathname();
	const isProductPage = pathname.includes("/product/");
	return product && isProductPage ? (
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
