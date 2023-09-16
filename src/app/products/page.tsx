import { getProducts } from "@/app/api/products";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";

type TProps = {
	searchParams: { page: string; totalPages: number };
};

const getPageIndex = ({ pageNumber, totalPages }: { pageNumber: string; totalPages: number }) => {
	const pageNumberParsed = parseInt(pageNumber);
	if (isNaN(pageNumberParsed)) {
		return 0;
	}
	if (pageNumberParsed > totalPages) {
		return totalPages - 1;
	}
	if (pageNumberParsed < 1) {
		return 0;
	}
	return pageNumberParsed - 1;
};

export default async function ProductsPage({ searchParams: { page, totalPages = 10 } }: TProps) {
	const pageIndex = getPageIndex({
		pageNumber: page,
		totalPages: totalPages,
	});
	const products = await getProducts({
		pageSize: 20,
		page: pageIndex,
	});

	return (
		<div>
			<div className="my-4  flex justify-center">
				<Pagination page={pageIndex + 1} totalPages={totalPages} route="/products" />
			</div>
			<ProductList products={products} />
		</div>
	);
}
