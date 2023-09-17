import { redirect } from "next/navigation";
import { getProducts } from "@/app/api/products";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { type TProduct } from "@/app/types";

type TProps = {
	params: { pageNumber: string };
};

const getAllProducts = async () => {
	const data = await getProducts({ pageSize: 7000, page: 0 });
	const totalPages = Math.ceil(data.length / 20);

	const getProductsPage = ({ pageSize, page }: { pageSize: number; page: number }) => {
		const offset = page * pageSize;
		return data.slice(offset, offset + 20);
	};
	return { data, totalPages, getProducts: getProductsPage };
};

export async function generateStaticParams() {
	const { totalPages } = await getAllProducts();
	return Array.from({ length: totalPages }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
}

export default async function ProductsPage({ params: { pageNumber } }: TProps) {
	const pageIndex = parseInt(pageNumber) - 1;
	// mock value for development
	let totalPages = 1000;
	let products: Array<TProduct> = [];
	const pageParams = {
		pageSize: 20,
		page: pageIndex,
	};

	if ((pageNumber && isNaN(pageIndex)) || pageIndex < 0) {
		redirect("/products/1");
	}

	if (process.env.NODE_ENV === "development") {
		products = await getProducts(pageParams);
	} else if (process.env.NODE_ENV === "production") {
		const allProducts = await getAllProducts();
		totalPages = allProducts.totalPages;
		products = allProducts.getProducts(pageParams);

		if (pageIndex > totalPages) {
			redirect("/products/" + totalPages);
		}
	}

	return (
		<div>
			<div className="my-4 flex justify-center">
				<Pagination page={pageIndex + 1} totalPages={totalPages} route="/products" />
			</div>
			<ProductList products={products} goBackParams={pageNumber} />
		</div>
	);
}
