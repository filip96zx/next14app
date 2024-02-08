import { type Metadata } from "next";
import { PageHeader } from "@/ui/atoms/PageHeader";
import { PaginatedCategoriesList, getPaginationParams } from "@/ui/organisms/list";
import { getMetadataTitle } from "@/utils";
import { getCategoriesList } from "@/api/queries/getCategoriesList";

export const metadata: Metadata = {
	title: getMetadataTitle("Categories"),
	description: "All categories list",
};

type TProps = {
	params: { pageNumber: string };
};
export default async function ProductsPage({ params: { pageNumber } }: TProps) {
	return (
		<div>
			<PageHeader>Collections</PageHeader>
			<PaginatedCategoriesList
				getListQuery={getCategoriesList}
				params={getPaginationParams({ pageNumber })}
				route="/category-list"
				// TODO task 1
				// goBackParams={`/collections/${pageNumber}`}
			/>
		</div>
	);
}
