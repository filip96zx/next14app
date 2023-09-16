import { getProducts } from "@/app/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";

type TProps = {
	searchParams: { page: string };
};
export default async function ProductsPage({ searchParams }: TProps) {
	const pageToNumber = parseInt(searchParams.page);
	const page = isNaN(pageToNumber) || pageToNumber < 0 ? 0 : pageToNumber;
	const products = await getProducts({ pageSize: 20, page });

	return <ProductList products={products} />;
}
