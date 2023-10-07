import { getCollectionList } from "@/api";
import { ListHeader } from "@/app/ui/ListHeader";
import { PaginatedCollectionList } from "@/app/ui/organisms/list";

export default function Home() {
	return (
		<main className="text-center">
			Home Page
			<ListHeader>Collections</ListHeader>
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
