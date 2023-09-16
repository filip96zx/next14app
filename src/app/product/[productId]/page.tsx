import { getProductById } from "@/app/api/products";
import { ProductCard } from "@/app/ui/molecules/ProductCard";

interface IProps {
	params: { productId: string };
}

export default async function ProductPage({ params }: IProps) {
	const product = await getProductById(params.productId);

	return (
		<div className="flex items-center justify-center">
			<div className="max-w-md">
				<ProductCard product={product} />
			</div>
		</div>
	);
}
