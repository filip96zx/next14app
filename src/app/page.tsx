import { getCollectionList } from "@/api";
import { PageHeader } from "@/app/ui/atoms/PageHeader";
import { PaginatedCollectionList } from "@/app/ui/organisms/list";

export default function Home() {
	return (
		<main className="text-center">
			Home Page
			<PageHeader>Collections</PageHeader>
			<PaginatedCollectionList
				getListQuery={getCollectionList}
				params={{ first: 4, skip: 0 }}
				route="/collections"
				// TODO task 1
				// goBackParams={`/`}
				hidePagination
			/>
		</main>
	);
}
