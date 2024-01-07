import { type Route } from "next";
import { Suspense } from "react";
import { getProductById, getProductsList } from "@/api";
import { getMetadataTitle } from "@/app/utils";
import { BackFormerPageParamName } from "@/app/models";
import { BackButton } from "@/app/ui/atoms/buttons";
import { ReviewList } from "@/app/ui/molecules/review/ReviewList";
import { Spinner } from "@/app/ui/atoms/Spinner";
import { ProductDetailsMainSection } from "@/app/ui/molecules/product-details-section";
import { ProductMainSectionFallback } from "@/app/ui/molecules/product-details-section/ProductMainSectionFallback";

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
	const { [BackFormerPageParamName.FROM]: from, page = 1 } = searchParams;

	return (
		<div className="flex flex-col  items-center justify-center gap-5">
			<div>
				<BackButton href={(from ? `${from}` : "/products") as Route} keepSearchParams>
					{!from && "All products"}
				</BackButton>
			</div>
			<Suspense fallback={<ProductMainSectionFallback />}>
				<ProductDetailsMainSection productId={params.productId} page={page} />
			</Suspense>
			<Suspense fallback={<Spinner />}>
				<ReviewList productId={params.productId} />
			</Suspense>
		</div>
	);
}
