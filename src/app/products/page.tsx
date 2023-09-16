import { redirect } from "next/navigation";
import { getProducts } from "@/app/api/products";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";

type TProps = {
	searchParams: { page: string; totalPages: number };
};

const getPageIndex = ({ pageNumber, totalPages }: { pageNumber: number; totalPages: number }) => {
	if (pageNumber > totalPages) {
		return totalPages - 1;
	}
	if (pageNumber < 1) {
		return 0;
	}
	return pageNumber - 1;
};

export default async function ProductsPage({
	searchParams: { page = "1", totalPages = 10 },
}: TProps) {
	const pageNumberParsed = parseInt(page);

	if ((page && isNaN(pageNumberParsed)) || pageNumberParsed < 1) {
		redirect("/products?page=1");
	}

	if (pageNumberParsed > totalPages) {
		redirect("/products?page=" + totalPages);
	}

	const pageIndex = getPageIndex({
		pageNumber: pageNumberParsed,
		totalPages: totalPages,
	});
	const products = await getProducts({
		pageSize: 20,
		page: pageIndex,
	});
	return (
		<div>
			<div className="my-4 flex justify-center">
				<Pagination page={pageIndex + 1} totalPages={totalPages} route="/products" />
			</div>
			<ProductList products={products} goBackParams={"page=" + page} />
		</div>
	);
}
