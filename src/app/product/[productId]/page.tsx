import { notFound } from "next/navigation";
import { type Route } from "next";
import { Suspense } from "react";
import { getProductById, getProductRelatedProductsByProductName, getProductsList } from "@/api";
import { getMetadataTitle } from "@/utils";
import { PaginatedProductList, getPaginationParams } from "@/ui/organisms/list";
import { type BackFormerPageParamName } from "@/models";
import { ReviewList } from "@/ui/molecules/review/ReviewList";
import { Spinner } from "@/ui/atoms/Spinner";
import { ProductDetails } from "@/ui/organisms/ProductDetails";

export const generateMetadata = async ({ params }: { params: { productId: string } }) => {
	const { content } = await getProductsList({});
	const product = content.find((i) => i.id === params.productId);

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

export async function generateStaticParams() {
	const { content } = await getProductsList({});
	return content.map((product) => ({
		productId: product.id,
	}));
}

interface IProps {
	params: { productId: string };
	searchParams: { [BackFormerPageParamName.FROM]: string; page: string | number } & Record<
		string,
		string | number
	>;
}

export default async function ProductPage({ params, searchParams }: IProps) {
	const { page = 1 } = searchParams;
	const product = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}
	const variants = product.variants.map((v) => ({ name: v.name, value: v.id }));
	const collectionSlug = product.collections[0]?.slug;

	return (
		<ProductDetails
			product={product}
			productVariants={variants}
			afterProductSection={
				<>
					{collectionSlug && (
						<Suspense fallback={<Spinner />}>
							<PaginatedProductList
								getListQuery={getProductRelatedProductsByProductName}
								params={{
									...getPaginationParams({ pageNumber: page, pageSize: 4 }),
									productName: product.name,
								}}
								dataTestid="related-products"
								// TODO task 1
								// goBackParams={`/product/${params.productId}${createQueryParams({
								// 	from,
								// 	page,
								// 	...restParams,
								// })}`}
								route={`/product/${params.productId}` as Route}
								searchParamsPagination
								hidePagination
							/>
						</Suspense>
					)}

					<Suspense fallback={<Spinner />}>
						<ReviewList productId={params.productId} />
					</Suspense>
				</>
			}
		/>
	);
}
