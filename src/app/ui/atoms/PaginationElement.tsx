import { type Route } from "next";
import clsx from "clsx";
import { ActiveLink } from "@/app/ui/atoms/ActiveLink";

type TProps = {
	label: React.ReactNode;
	route: Route;
	className?: string;
	page: number;
	activeDisabled?: boolean;
};

const className = "text-2xl text-blue-500";
const activeClassName = "underline";
export const PaginationElement = ({ label, route, page, activeDisabled }: TProps) => {
	return (
		<ActiveLink
			href={`${route}/${page}` as Route}
			activeClassName={clsx(!activeDisabled && activeClassName)}
			className={clsx(className)}
			keepSearchParams
		>
			{label}
		</ActiveLink>
	);
};
