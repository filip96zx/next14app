import Link from "next/link";
import { ListItemImage } from "@/ui/atoms/image";
import { type CategoryListItemFragment } from "@/gql/graphql";

type TProps = {
	category: CategoryListItemFragment;
	// TODO task 1
	// goBackParams?: string | number;
};

export const CategoryListItem = ({
	// goBackParams,
	category: { image, name, slug },
}: TProps) => {
	return (
		<li>
			<Link href={`/categories/${slug}`}>
				{/* ${createQueryParams({
			 		[BackFormerPageParamName.FROM]: goBackParams,
			 	})}`}
			 > */}
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<article>
					<ListItemImage alt={name} src={image?.url} width={image?.width} height={image?.height} />
				</article>
			</Link>
		</li>
	);
};
