import { getProducts } from "@/app/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProducts();

	return <ProductList products={products} />;
}
