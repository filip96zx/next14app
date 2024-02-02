import { type Route } from "next";
import { redirect } from "next/navigation";
import { PaginatedProductList, getPaginationParams } from "@/ui/organisms/list";

import { getProductsByCollectionSlug } from "@/api";
import { PageHeader } from "@/ui/atoms/PageHeader";
import { getMetadataTitle } from "@/utils";
import { BackFormerPageParamName } from "@/models";
import { BackButton } from "@/ui/atoms/buttons";

export const generateMetadata = async ({
	params: { pageNumber, slug: collectionSlug },
}: TProps) => {
	const queryParams = {
		slug: collectionSlug,
		...getPaginationParams({ pageNumber }),
	};
	const { collectionName } = await getProductsByCollectionSlug(queryParams);

	if (!collectionName) return null;
	return {
		title: getMetadataTitle(collectionName),
	};
};

type TProps = {
	params: { pageNumber: string; slug: string };
	searchParams: { [BackFormerPageParamName.FROM]: string };
};

export default async function CollectionProductPage({
	params: { pageNumber, slug },
	searchParams: { [BackFormerPageParamName.FROM]: from },
}: TProps) {
	const queryParams = {
		slug,
		...getPaginationParams({ pageNumber }),
	};
	const { collectionName } = await getProductsByCollectionSlug(queryParams);

	if (!collectionName) {
		redirect("/products");
	}

	return (
		<div>
			<PageHeader>{collectionName}</PageHeader>
			<BackButton href={(from ? `${from}` : "/products") as Route}>
				{!from && "All products"}
			</BackButton>
			<PaginatedProductList
				getListQuery={getProductsByCollectionSlug}
				params={queryParams}
				route={`/collection/${slug}` as Route}
				// TODO task 1
				// goBackParams={`/collection/${slug}/${pageNumber}${createQueryParams({
				//	[BackFormerPageParamName.FROM]: from,
				// })}`}
			/>
		</div>
	);
}
