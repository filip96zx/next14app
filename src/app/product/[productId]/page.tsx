import { notFound } from "next/navigation";
import { type Route } from "next";
import { Suspense } from "react";
import { getProductById, getProductsByCollectionSlug } from "@/app/api";
import { ProductCard } from "@/app/ui/molecules/ProductCard";
import { createQueryParams, getMetadataTitle } from "@/app/utils";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/list";
import { BackFormerPageParamName } from "@/app/models";
import { AddToCartButton, BackButton } from "@/app/ui/atoms/buttons";
import { NumberInput, Select } from "@/app/ui/atoms/inputs";
import { addToCartServerAction } from "@/app/services/server-actions";

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

export default async function ProductPage({ params, searchParams }: IProps) {
	const { [BackFormerPageParamName.FROM]: from, page = 1, ...restParams } = searchParams;
	const product = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}
	const collectionSlug = product.collections[0]?.slug;

	return (
		<div className="flex flex-col  items-center justify-center gap-5">
			<div>
				<BackButton href={(from ? `${from}` : "/products") as Route} keepSearchParams>
					{!from && "All products"}
				</BackButton>
			</div>
			<h1 className="text-center text-2xl font-bold text-gray-800">{product.name}</h1>
			<div className="max-w-md">
				<ProductCard product={product} />
				<form action={addToCartServerAction.bind(null, product.id)}>
					<Select
						name="variantId"
						options={product.variants.map((v) => ({ name: v.name, value: v.id }))}
					/>
					<NumberInput name="quantity" min={1} max={100} defaultValue={1} className="w-20" />
					<AddToCartButton />
				</form>
			</div>
			<p className="text-center text-gray-500">{product.description}</p>
			{collectionSlug && (
				<Suspense fallback={<div>Loading...</div>}>
					<PaginatedProductList
						getListQuery={getProductsByCollectionSlug}
						params={{
							...getPaginationParams({ pageNumber: page, pageSize: 4 }),
							slug: collectionSlug,
							excludedIds: [params.productId],
						}}
						goBackParams={`/product/${params.productId}${createQueryParams({
							from,
							page,
							...restParams,
						})}`}
						route={`/product/${params.productId}` as Route}
						searchParamsPagination
						hidePagination
					/>
				</Suspense>
			)}
		</div>
	);
}
