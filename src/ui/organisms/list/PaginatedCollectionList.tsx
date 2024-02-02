import { type OmitKeys } from "@/models";
import { CollectionList } from "@/ui/organisms/list/shared/CollectionList";
import { PaginatedList, type TPaginatedListProps } from "@/ui/organisms/list/shared/PaginatedList";
import { type CollectionListItemFragment } from "@/gql/graphql";

export async function PaginatedCollectionList<TParams extends { skip: number; first: number }>(
	props: OmitKeys<TPaginatedListProps<TParams, CollectionListItemFragment>, "renderList">,
) {
	return (
		<PaginatedList
			{...props}
			renderList={({ content }) => (
				<CollectionList collections={content} /*goBackParams={goBackParams}*/ />
			)}
		/>
	);
}
