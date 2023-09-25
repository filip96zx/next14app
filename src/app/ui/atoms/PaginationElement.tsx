import { type Route } from "next";
import clsx from "clsx";
import { ActiveLink } from "@/app/ui/atoms/ActiveLink";
import { createPaginationParams } from "@/app/utils";

type TProps = {
	label: React.ReactNode;
	route: Route;
	className?: string;
	page: number;
	activeDisabled?: boolean;
	searchParamsPagination?: boolean;
	isActive?: boolean;
};

const className = "text-2xl text-blue-500";
const activeClassName = "underline";
export const PaginationElement = ({
	label,
	route,
	page,
	activeDisabled,
	searchParamsPagination,
	isActive,
}: TProps) => {
	return (
		<ActiveLink
			href={
				`${route}${createPaginationParams({ params: { page }, searchParamsPagination })}` as Route
			}
			activeClassName={clsx(!activeDisabled && activeClassName)}
			className={clsx(className)}
			scroll={!searchParamsPagination}
			forceActive={isActive}
			keepSearchParams
		>
			{label}
		</ActiveLink>
	);
};
