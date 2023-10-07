import { type Metadata } from "next";
import { getCollectionList } from "@/app/api";
import { ListHeader } from "@/app/ui/ListHeader";
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
			<ListHeader>Collections</ListHeader>
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
