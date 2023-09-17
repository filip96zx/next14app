import Link from "next/link";
import { getProductById } from "@/app/api/products";
import { ProductCard } from "@/app/ui/molecules/ProductCard";
import { getMetadataTitle } from "@/app/utils";

export const generateMetadata = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);
	return {
		title: getMetadataTitle(product.name),
		description: product.description,
		openGraph: {
			title: getMetadataTitle(product.name),
			description: product.description,
			images: [
				{
					url: product.image.src,
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

export default async function ProductPage({ params, searchParams: { from } }: IProps) {
	const product = await getProductById(params.productId);
	return (
		<div className="flex flex-col  items-center justify-center gap-5">
			<div>
				<Link className="text-blue-500" href={from ? `/products/${from}` : "/products"}>
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
