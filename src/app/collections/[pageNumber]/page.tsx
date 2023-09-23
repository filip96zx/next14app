import { type Metadata } from "next";
import { getCollectionList, getProductsList } from "@/app/api";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { ListHeader } from "@/app/ui/ListHeader";
import { PaginatedCollectionList, getPaginationParams } from "@/app/ui/organisms/list";
import { getMetadataTitle } from "@/app/utils";

export const metadata: Metadata = {
	title: getMetadataTitle("All products"),
	description: "All products list",
};

export async function _generateStaticParams() {
	const { totalElements } = await getProductsList({
		first: 1,
		skip: 0,
	});
	return Array.from({ length: Math.ceil(totalElements / LIST_PAGE_SIZE) }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
}

type TProps = {
	params: { pageNumber: string };
};

export default async function ProductsPage({ params: { pageNumber } }: TProps) {
	return (
		<div>
			<ListHeader>Categories</ListHeader>
			<PaginatedCollectionList
				getListQuery={getCollectionList}
				params={getPaginationParams({ pageNumber })}
				route="/collections"
				goBackParams={`/collections/${pageNumber}`}
			/>
		</div>
	);
}
