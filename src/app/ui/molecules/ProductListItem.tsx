import Link from "next/link";
import { ProductListItemImageCover } from "@/app/ui/atoms/ProductListItemImageCover";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type TProps = {
	product: ProductListItemFragment;
	goBackParams?: string;
};

export const ProductListItem = ({ product, goBackParams }: TProps) => {
	const goBackParamsString = goBackParams ? `?from=${goBackParams}` : "";
	const image = product.images[0]?.url;

	return (
		<li>
			<Link href={`/product/${product.id}${goBackParamsString}`}>
				<article>
					{image && <ProductListItemImageCover src={image} alt={product.name} />}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
