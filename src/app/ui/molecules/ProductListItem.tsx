import Link from "next/link";
import { ListItemImage } from "@/app/ui/atoms/image";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";
type TProps = {
	product: ProductListItemFragment;
	// TODO task 1
	// goBackParams?: string | number;
};

export const ProductListItem = ({ product }: TProps) => {
	const image = product.images[0];

	return (
		<li>
			<Link href={`/product/${product.id}`}>
				{/* ${createQueryParams({
					[BackFormerPageParamName.FROM]: goBackParams,
				})}`}
			> */}
				<article>
					<ListItemImage
						src={image?.url}
						width={image?.width}
						height={image?.height}
						alt={product.name}
					/>
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
