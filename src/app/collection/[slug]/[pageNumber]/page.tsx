import { type Route } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/list";

import { getProductsByCollectionSlug } from "@/app/api";
import { ListHeader } from "@/app/ui/ListHeader";
import { createQueryParams, getMetadataTitle } from "@/app/utils";
import { BackFormerPageParamName } from "@/app/models";

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
	searchParams: { [BackFormerPageParamName.FROM_COLLECTION]: string };
};

export default async function CollectionProductPage({
	params: { pageNumber, slug },
	searchParams: { [BackFormerPageParamName.FROM_COLLECTION]: from },
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
			<ListHeader>{collectionName}</ListHeader>
			<Link className="text-blue-500" href={(from ? `${from}` : "/products") as Route}>
				{from ? "Back" : "All products"}
			</Link>
			<PaginatedProductList
				getListQuery={getProductsByCollectionSlug}
				params={queryParams}
				route={`/collection/${slug}` as Route}
				goBackParams={`/collection/${slug}/${pageNumber}${createQueryParams({
					[BackFormerPageParamName.FROM_COLLECTION]: from,
				})}`}
			/>
		</div>
	);
}
