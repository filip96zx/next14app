import Link from "next/link";
import { ListItemImage } from "@/app/ui/atoms/image";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type TProps = {
	product: ProductListItemFragment;
	goBackParams?: string | number;
};

export const ProductListItem = ({ product, goBackParams }: TProps) => {
	const goBackParamsString = goBackParams ? `?from=${goBackParams}` : "";
	const image = product.images[0];

	return (
		<li>
			<Link href={`/product/${product.id}${goBackParamsString}`}>
				<article>
					{image && (
						<ListItemImage
							src={image.url}
							width={image.width || undefined}
							height={image.height || undefined}
							alt={product.name}
						/>
					)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
