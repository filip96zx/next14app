import Link from "next/link";
import { ListItemImage } from "@/app/ui/atoms/image";
import { type CollectionListItemFragment } from "@/gql/graphql";

type TProps = {
	collection: CollectionListItemFragment;
	// TODO task 1
	// goBackParams?: string | number;
};

export const CollectionListItem = ({
	// goBackParams,
	collection: { images, name, slug, description },
}: TProps) => {
	const image = images && images[0];
	return (
		<li>
			<Link href={`/collection/${slug}`}>
				{/* ${createQueryParams({
			 		[BackFormerPageParamName.FROM]: goBackParams,
			 	})}`}
			 > */}
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<article>
					<ListItemImage alt={name} src={image?.url} width={image?.width} height={image?.height} />
				</article>
			</Link>
			<p className="text-sm font-semibold text-gray-800">{description}</p>
		</li>
	);
};
