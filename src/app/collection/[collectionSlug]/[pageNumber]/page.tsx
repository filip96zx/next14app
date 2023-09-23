import { type Route } from "next";
import { redirect } from "next/navigation";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/product-list";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { getProductsByCollectionSlug } from "@/app/api";
import { ListHeader } from "@/app/ui/ListHeader";
import { getMetadataTitle } from "@/app/utils";

export async function _generateStaticParams() {
	const { totalElements } = await getProductsByCollectionSlug({
		slug: "t-shirts",
		first: 1,
		skip: 0,
	});
	return Array.from({ length: Math.ceil(totalElements / LIST_PAGE_SIZE) }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
}

export const generateMetadata = async ({ params: { pageNumber, categorySlug } }: TProps) => {
	const queryParams = {
		slug: categorySlug,
		...getPaginationParams({ pageNumber }),
	};
	const { collectionName } = await getProductsByCollectionSlug(queryParams);

	if (!collectionName) return null;
	return {
		title: getMetadataTitle(collectionName),
	};
};

type TProps = {
	params: { pageNumber: string; categorySlug: string };
};

export default async function ProductsPage({ params: { pageNumber, categorySlug } }: TProps) {
	const queryParams = {
		slug: categorySlug,
		...getPaginationParams({ pageNumber }),
	};
	const { collectionName } = await getProductsByCollectionSlug(queryParams);

	if (!collectionName) {
		redirect("/products");
	}

	return (
		<div>
			<ListHeader>{collectionName}</ListHeader>
			<PaginatedProductList
				getListQuery={getProductsByCollectionSlug}
				params={queryParams}
				route={`/collection/${categorySlug}` as Route}
				goBackParams={`/collection/${categorySlug}/${pageNumber}`}
			/>
		</div>
	);
}
