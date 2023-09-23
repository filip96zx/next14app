import Link from "next/link";
import { notFound } from "next/navigation";
import { type Route } from "next";
import { getProductById } from "@/app/api";
import { ProductCard } from "@/app/ui/molecules/ProductCard";
import { getMetadataTitle, goBackPath } from "@/app/utils";

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
	searchParams: { from: string };
}

export default async function ProductPage({
	params,
	searchParams: { [goBackPath]: from },
}: IProps) {
	const product = await getProductById(params.productId);

	if (!product) {
		return notFound();
	}

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
		</div>
	);
}
