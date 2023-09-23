import Link from "next/link";
import { ListItemImage } from "@/app/ui/atoms/image";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";
import { createQueryParams } from "@/app/utils";

type TProps = {
	product: ProductListItemFragment;
	goBackParams?: string | number;
};

export const ProductListItem = ({ product, goBackParams }: TProps) => {
	const image = product.images[0];

	return (
		<li>
			<Link href={`/product/${product.id}${createQueryParams({ from: goBackParams })}`}>
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
