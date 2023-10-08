import { type Metadata } from "next";
import { getCollectionList } from "@/api";
import { PageHeader } from "@/app/ui/atoms/PageHeader";
import { PaginatedCollectionList, getPaginationParams } from "@/app/ui/organisms/list";
import { getMetadataTitle } from "@/app/utils";

export const metadata: Metadata = {
	title: getMetadataTitle("Collections"),
	description: "All collections list",
};

type TProps = {
	params: { pageNumber: string };
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
