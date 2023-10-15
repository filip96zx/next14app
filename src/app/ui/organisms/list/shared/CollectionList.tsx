import { CollectionListItem } from "@/app/ui/molecules/CollectionListItem";
import { type CollectionListItemFragment } from "@/gql/graphql";

type TProps = {
	collections: Array<CollectionListItemFragment>;
	// TODO task 1
	// goBackParams: string | number;
};

export const CollectionList = ({ collections }: TProps) => {
	return (
		<ul data-testid="collection-list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
			{collections.map((collection) => (
				<CollectionListItem
					key={collection.slug}
					collection={collection}
					// TODO task 1
					// goBackParams={goBackParams}
				/>
			))}
		</ul>
	);
};
