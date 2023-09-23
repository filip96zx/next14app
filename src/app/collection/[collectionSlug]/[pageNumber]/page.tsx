import { type Route } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/list";
import { LIST_PAGE_SIZE } from "@/app/constants";
import { getProductsByCollectionSlug } from "@/app/api";
import { ListHeader } from "@/app/ui/ListHeader";
import { createGoBackParams, getMetadataTitle } from "@/app/utils";

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

export const generateMetadata = async ({ params: { pageNumber, collectionSlug } }: TProps) => {
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
	params: { pageNumber: string; collectionSlug: string };
	searchParams: { "from-collection": string };
};

export default async function CollectionProductPage({
	params: { pageNumber, collectionSlug },
	searchParams: { "from-collection": from },
}: TProps) {
	const queryParams = {
		slug: collectionSlug,
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
				route={`/collection/${collectionSlug}` as Route}
				goBackParams={`/collection/${collectionSlug}/${pageNumber}${createGoBackParams({
					goBackParams: from,
					paramName: "from-collection",
				})}`}
			/>
		</div>
	);
}
