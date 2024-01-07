import { notFound } from "next/navigation";
import { type Route } from "next";
import { getProductById, getProductRelatedProductsByProductName } from "@/api";
import { ProductMainSection } from "@/app/ui/molecules/product-details-section/ProductMainSection";
import { ProductVariantSelect } from "@/app/ui/molecules/product-details-section/ProductVariantSelect";
import { PaginatedProductList, getPaginationParams } from "@/app/ui/organisms/list";

export const ProductDetailsMainSection = async ({
	productId,
	page,
}: {
	productId: string;
	page: number | string;
}) => {
	const product = await getProductById(productId);

	if (!product) {
		return notFound();
	}
	return (
		<>
			<ProductMainSection
				product={product}
				variantSelect={<ProductVariantSelect productId={product.id} />}
			/>
			<PaginatedProductList
				getListQuery={getProductRelatedProductsByProductName}
				params={{
					...getPaginationParams({ pageNumber: page, pageSize: 4 }),
					productName: product.name,
				}}
				dataTestid="related-products"
				route={`/product/${productId}` as Route}
				searchParamsPagination
				hidePagination
			/>
		</>
	);
};
