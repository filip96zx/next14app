"use client";

import { type OmitKeys } from "@/app/models";
import { useProductCache } from "@/app/services/product-cache.service";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductCacheDate = ({
	property,
}: {
	property: keyof OmitKeys<ProductListItemFragment, "images" | "categories">;
}) => {
	const { product } = useProductCache();

	if (!product) {
		return null;
	}

	return product[property];
};
