"use client";
import Link, { type LinkProps } from "next/link";
import { useSetProductCache } from "@/services/product-cache.service";
import { type ProductListItemFragment } from "@/gql/graphql";

export const LinkWithProductCache = ({
	product,
	...props
}: Omit<LinkProps<string>, "onClick"> & { product: ProductListItemFragment }) => {
	const { setProduct } = useSetProductCache();
	return (
		<Link
			{...props}
			onClick={() => {
				setProduct(product);
			}}
		/>
	);
};
