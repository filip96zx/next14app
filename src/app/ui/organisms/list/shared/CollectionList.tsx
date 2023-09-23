import { CollectionListItem } from "@/app/ui/molecules/CollectionListItem";
import { ListLayout } from "@/app/ui/atoms/ListLayout";
import { type CollectionListItemFragment } from "@/gql/graphql";

type TProps = {
	collections: Array<CollectionListItemFragment>;
	goBackParams: string | number;
};

export const CollectionList = ({ collections, goBackParams }: TProps) => {
	return (
		<ListLayout data-testid="collection-list">
			{collections.map((collection) => (
				<CollectionListItem
					key={collection.slug}
					collection={collection}
					goBackParams={goBackParams}
				/>
			))}
		</ListLayout>
	);
};
