import { ProductList } from "./shared/ProductList";
import { type OmitKeys } from "@/app/models";
import {
	PaginatedList,
	type TPaginatedListProps,
} from "@/app/ui/organisms/product-list/shared/PaginatedList";

export async function PaginatedProductList<TParams extends { skip: number; first: number }>(
	props: OmitKeys<TPaginatedListProps<TParams>, "renderList">,
) {
	return (
		<PaginatedList
			{...props}
			renderList={({ content, goBackParams }) => (
				<ProductList products={content} goBackParams={goBackParams} />
			)}
		/>
	);
}
