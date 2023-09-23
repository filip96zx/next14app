import Link from "next/link";
import { ListItemImage } from "@/app/ui/atoms/image";
import { type CollectionListItemFragment } from "@/gql/graphql";
import { createGoBackParams } from "@/app/utils";

type TProps = {
	collection: CollectionListItemFragment;
	goBackParams?: string | number;
};

export const CollectionListItem = ({
	goBackParams,
	collection: { image, name, slug, description },
}: TProps) => {
	return (
		<li>
			<Link
				href={`/collection/${slug}${createGoBackParams({
					goBackParams,
					paramName: "from-collection",
				})}`}
			>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<article>
					<ListItemImage
						alt={name}
						src={image.url}
						width={image.width || undefined}
						height={image.height || undefined}
					/>
				</article>
			</Link>
			<p className="text-sm font-semibold text-gray-800">{description}</p>
		</li>
	);
};
