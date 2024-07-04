import { type Metadata } from "next";
import { getCollectionList } from "@/api";
import { PageHeader } from "@/ui/atoms/PageHeader";
import { PaginatedCollectionList, getPaginationParams } from "@/ui/organisms/list";
import { getMetadataTitle } from "@/utils";
import { LIST_PAGE_SIZE } from "@/constants";

export const metadata: Metadata = {
	title: getMetadataTitle("Collections"),
	description: "All collections list",
};

type TProps = {
	params: { pageNumber: string };
};
export const generateStaticParams = async () => {
	const { totalElements } = await getCollectionList({
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
			<PaginatedCollectionList
				getListQuery={getCollectionList}
				params={getPaginationParams({ pageNumber })}
				route="/collections"
				// TODO task 1
				// goBackParams={`/collections/${pageNumber}`}
			/>
		</div>
	);
}
