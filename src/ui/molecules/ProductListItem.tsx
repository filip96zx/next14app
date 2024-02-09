import { type Route } from "next";
import { ListItemImage } from "@/ui/atoms/image";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";
import { LinkWithProductCache } from "@/ui/atoms/buttons";
type TProps = {
	product: ProductListItemFragment;
	// TODO task 1
	// goBackParams?: string | number;
};

export const ProductListItem = ({ product }: TProps) => {
	const image = product.images[0];

	return (
		<li>
			<LinkWithProductCache href={`/product/${product.id}` as Route} product={product}>
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
			</LinkWithProductCache>
		</li>
	);
};
