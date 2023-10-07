import { ProductList } from "./shared/ProductList";
import { type OmitKeys } from "@/app/models";
import {
	PaginatedList,
	type TPaginatedListProps,
} from "@/app/ui/organisms/list/shared/PaginatedList";
import { type ProductListItemFragment } from "@/gql/graphql";

export async function PaginatedProductList<TParams extends { skip: number; first: number }>(
	props: OmitKeys<TPaginatedListProps<TParams, ProductListItemFragment>, "renderList">,
) {
	return (
		<PaginatedList {...props} renderList={({ content }) => <ProductList products={content} />} />
	);
}
