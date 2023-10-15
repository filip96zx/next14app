import { getProductsList } from "@/api";
import { PageHeader } from "@/app/ui/atoms/PageHeader";
import { PaginatedProductList } from "@/app/ui/organisms/list";

export default function Home() {
	return (
		<main className="text-center">
			Home Page
			<PageHeader>Products</PageHeader>
			<PaginatedProductList
				getListQuery={getProductsList}
				params={{ first: 4, skip: 0 }}
				// route="/collections"
				route="/products"
				// TODO task 1
				// goBackParams={`/`}
				hidePagination
			/>
		</main>
	);
}
