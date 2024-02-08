import { type OmitKeys } from "@/models";
import { CategoryList } from "@/ui/organisms/list/shared/CategoryList";
import { PaginatedList, type TPaginatedListProps } from "@/ui/organisms/list/shared/PaginatedList";
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
