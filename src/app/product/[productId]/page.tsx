import Link from "next/link";
import { notFound } from "next/navigation";
import { type Route } from "next";
import { Suspense } from "react";
import { getProductById, getProductsByCollectionSlug } from "@/app/api";
import { ProductCard } from "@/app/ui/molecules/ProductCard";
import { createQueryParams, getMetadataTitle } from "@/app/utils";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/list";
import { BackFormerPageParamName } from "@/app/models";

export const generateMetadata = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);
	if (!product) return null;
	return {
		title: getMetadataTitle(product.name),
		description: product.description,
		openGraph: {
			title: getMetadataTitle(product.name),
			description: product.description,
			images: [
				{
					url: product.images[0]?.url,
					alt: product.name,
				},
			],
		},
	};
};

interface IProps {
	params: { productId: string };
	searchParams: { [BackFormerPageParamName.FROM]: string; page: string | number } & Record<
		string,
		string | number
	>;
}

export default async function ProductPage({
	params,
	searchParams: { [BackFormerPageParamName.FROM]: from, page = 1, ...restParams },
}: IProps) {
	const product = await getProductById(params.productId);

	if (!product) {
		return notFound();
	}
	const collectionSlug = product.collections[0]?.slug;

	return (
		<div className="flex flex-col  items-center justify-center gap-5">
			<div>
				<Link className="text-blue-500" href={(from ? `${from}` : "/products") as Route}>
					{from ? "Back" : "All products"}
				</Link>
			</div>
			<h1 className="text-center text-2xl font-bold text-gray-800">{product.name}</h1>
			<div className="max-w-md">
				<ProductCard product={product} />
			</div>
			<p className="text-center text-gray-500">{product.description}</p>
			{collectionSlug && (
				<Suspense fallback={<div>Loading...</div>}>
					<PaginatedProductList
						getListQuery={getProductsByCollectionSlug}
						params={{
							...getPaginationParams({ pageNumber: page, pageSize: 4 }),
							slug: collectionSlug,
						}}
						goBackParams={`/product/${params.productId}${createQueryParams({
							from,
							...restParams,
						})}`}
						route={`/product/${params.productId}` as Route}
						searchParamsPagination
					/>
				</Suspense>
			)}
		</div>
	);
}
