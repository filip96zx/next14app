import Link from "next/link";
import { getProductById } from "@/app/api/products";
import { ProductCard } from "@/app/ui/molecules/ProductCard";

interface IProps {
	params: { productId: string };
	searchParams: { from: string };
}

export default async function ProductPage({ params, searchParams: { from } }: IProps) {
	const product = await getProductById(params.productId);
	return (
		<div className="flex flex-col  items-center justify-center gap-5">
			<div>
				<Link className="text-blue-500" href={from ? `/products?${from}` : "/products"}>
					{from ? "Back" : "All products"}
				</Link>
			</div>
			<div className="max-w-md">
				<ProductCard product={product} />
			</div>
		</div>
	);
}
