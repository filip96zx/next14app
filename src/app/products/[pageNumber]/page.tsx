import { redirect } from "next/navigation";
import { type GetProductsSearchParams, getProductsList } from "@/app/api/products";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { type ProductListItemFragment } from "@/gql/graphql";
import { LIST_PAGE_SIZE } from "@/app/constants";

const mockedPagesInDevMode = 1000;
const productsPageSize = LIST_PAGE_SIZE;

let ALL_PRODUCTS: Array<ProductListItemFragment> | null = null;
const getAllProducts = async () => {
	const data = ALL_PRODUCTS || (await getProductsList({ pageSize: 7000, page: 0 }));
	if (!ALL_PRODUCTS) {
		ALL_PRODUCTS = data;
	}
	const totalPages = Math.ceil(data.length / productsPageSize);

	const getProductsPage = ({ pageSize, page }: GetProductsSearchParams) => {
		const offset = page * pageSize;
		return data.slice(offset, offset + productsPageSize);
	};
	return { data, totalPages, getProductsPage };
};

const getProductsHandler = async (
	pageParams: GetProductsSearchParams,
): Promise<{ products: Array<ProductListItemFragment>; totalPages: number }> => {
	if (process.env.NODE_ENV === "development") {
		return { products: await getProductsList(pageParams), totalPages: mockedPagesInDevMode };
	} else {
		const { getProductsPage, totalPages } = await getAllProducts();
		return { products: getProductsPage(pageParams), totalPages };
	}
};

export async function generateStaticParams() {
	const { totalPages } = await getAllProducts();
	return Array.from({ length: totalPages }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
}

type TProps = {
	params: { pageNumber: string };
};

export default async function ProductsPage({ params: { pageNumber } }: TProps) {
	const pageToNumber = parseInt(pageNumber);
	const pageIndex = pageToNumber - 1;

	const isPageNumberValid = !isNaN(pageToNumber) && pageIndex >= 0;
	if (!isPageNumberValid) {
		redirect("/products/1");
	}

	const { products, totalPages } = await getProductsHandler({
		pageSize: productsPageSize,
		page: pageIndex,
	});

	if (process.env.NODE_ENV === "production") {
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
