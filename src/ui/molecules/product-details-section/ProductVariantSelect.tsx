import { notFound } from "next/navigation";
import { getProductById } from "@/api";
import { Select } from "@/ui/atoms/inputs";

export const ProductVariantSelect = async ({ productId }: { productId: string }) => {
	const product = await getProductById(productId);

	if (!product) {
		return notFound();
	}

	return (
		<Select
			name="variantId"
			options={product.variants.map((v) => ({ name: v.name, value: v.id }))}
		/>
	);
};
