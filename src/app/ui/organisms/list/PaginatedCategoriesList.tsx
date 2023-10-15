import { type OmitKeys } from "@/app/models";
import { CategoryList } from "@/app/ui/organisms/list/shared/CategoryList";
import {
	PaginatedList,
	type TPaginatedListProps,
} from "@/app/ui/organisms/list/shared/PaginatedList";
import { type CategoryListItemFragment } from "@/gql/graphql";

export async function PaginatedCategoriesList<TParams extends { skip: number; first: number }>(
	props: OmitKeys<TPaginatedListProps<TParams, CategoryListItemFragment>, "renderList">,
) {
	return (
		<PaginatedList
			{...props}
			renderList={({ content }) => (
				<CategoryList categories={content} /*goBackParams={goBackParams}*/ />
			)}
		/>
	);
}
