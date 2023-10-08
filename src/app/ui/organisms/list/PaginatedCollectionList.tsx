import { type OmitKeys } from "@/app/models";
import { CollectionList } from "@/app/ui/organisms/list/shared/CollectionList";
import {
	PaginatedList,
	type TPaginatedListProps,
} from "@/app/ui/organisms/list/shared/PaginatedList";
import { type CollectionListItemFragment } from "@/gql/graphql";

export async function PaginatedCollectionList<TParams extends { skip: number; first: number }>(
	props: OmitKeys<TPaginatedListProps<TParams, CollectionListItemFragment>, "renderList">,
) {
	return (
		<PaginatedList
			{...props}
			renderList={({ content, }) => (
				<CollectionList collections={content} /*goBackParams={goBackParams}*/ />
			)}
		/>
	);
}
