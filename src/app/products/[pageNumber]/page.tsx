import { type Metadata } from "next";
import { getProductsList } from "@/app/api";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { ListHeader } from "@/app/ui/ListHeader";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/list";
import { getMetadataTitle } from "@/app/utils";

export const metadata: Metadata = {
	title: getMetadataTitle("All products"),
	description: "All products list",
};

export async function generateStaticParams() {
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
			<ListHeader>All products</ListHeader>
			<PaginatedProductList
				getListQuery={getProductsList}
				params={getPaginationParams({ pageNumber })}
				route="/products"
				goBackParams={`/products/${pageNumber}`}
			/>
		</div>
	);
}
