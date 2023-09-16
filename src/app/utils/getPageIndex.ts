export const getPageIndex = ({ pageNumber, totalPages }: { pageNumber: number; totalPages: number }) => {
	if (pageNumber > totalPages) {
		return totalPages - 1;
	}
	if (pageNumber < 1) {
		return 0;
	}
	return pageNumber - 1;
};
