import Link from "next/link";
import { type TProduct } from "@/app/types";
import { ProductListItemImageCover } from "@/app/ui/atoms/ProductListItemImageCover";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";

type TProps = {
	product: TProduct;
	goBackParams?: string;
};

export const ProductListItem = ({ product, goBackParams }: TProps) => {
	const goBackParamsString = goBackParams ? `?from=${goBackParams}` : "";
	return (
		<li>
			<article>
				<Link href={`/product/${product.id}${goBackParamsString}`}>
					<ProductListItemImageCover {...product.image} />
					<ProductListItemDescription product={product} />
				</Link>
			</article>
		</li>
	);
};
