import { getCollectionList } from "@/app/api";
import { ListHeader } from "@/app/ui/ListHeader";
import { PaginatedCollectionList } from "@/app/ui/organisms/list";

export default function Home() {
	return (
		<main className="text-center">
			Home Page
			<ListHeader>Collections</ListHeader>
			<PaginatedCollectionList
				getListQuery={getCollectionList}
				params={{ first: 10, skip: 0 }}
				route="/collections"
				goBackParams={`/collections/1`}
			/>
		</main>
	);
}
