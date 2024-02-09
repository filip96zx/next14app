import { ProductList } from "./shared/ProductList";
import { type OmitKeys } from "@/models";
import { PaginatedList, type TPaginatedListProps } from "@/ui/organisms/list/shared/PaginatedList";
import { type ProductListItemFragment } from "@/gql/graphql";

export async function PaginatedProductList<TParams extends { skip: number; first: number }>({
	dataTestid,
	...props
}: OmitKeys<TPaginatedListProps<TParams, ProductListItemFragment>, "renderList"> & {
	dataTestid?: string;
}) {
	return (
		<PaginatedList
			{...props}
			renderList={({ content }) => <ProductList products={content} dataTestid={dataTestid} />}
		/>
	);
}
