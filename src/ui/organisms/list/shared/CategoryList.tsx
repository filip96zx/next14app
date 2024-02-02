import { ListLayout } from "@/ui/atoms/ListLayout";
import { type CategoryListItemFragment } from "@/gql/graphql";
import { CategoryListItem } from "@/ui/molecules/CategoryListItem";

type TProps = {
	categories: Array<CategoryListItemFragment>;
	// TODO task 1
	// goBackParams: string | number;
};

export const CategoryList = ({ categories }: TProps) => {
	return (
		<ListLayout data-testid="collection-list">
			{categories.map((category) => (
				<CategoryListItem
					key={category.slug}
					category={category}
					// TODO task 1
					// goBackParams={goBackParams}
				/>
			))}
		</ListLayout>
	);
};
