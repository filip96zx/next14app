import { type Metadata } from "next";
import { PageHeader } from "@/ui/atoms/PageHeader";
import { PaginatedCategoriesList, getPaginationParams } from "@/ui/organisms/list";
import { getMetadataTitle } from "@/utils";
import { getCategoriesList } from "@/api/queries/getCategoriesList";
import { LIST_PAGE_SIZE } from "@/constants";

export const metadata: Metadata = {
	title: getMetadataTitle("Categories"),
	description: "All categories list",
};

type TProps = {
	params: { pageNumber: string };
};

export const generateStaticParams = async () => {
	const { totalElements } = await getCategoriesList({
		first: 1,
		skip: 0,
	});
	return Array.from({ length: Math.ceil(totalElements / LIST_PAGE_SIZE) }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
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
