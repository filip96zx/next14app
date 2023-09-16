import { type Route } from "next";
import { ActiveLink } from "@/app/ui/atoms/ActiveLink";

type TProps = {
	label: React.ReactNode;
	route: Route;
	activeClassName?: string;
	className?: string;
	page: number;
};

export const PaginationElement = ({ label, route, activeClassName, className, page }: TProps) => {
	return (
		<ActiveLink
			activeClassName={activeClassName}
			className={className}
			exact
			href={`${route}?page=${page}` as Route}
		>
			{label}
		</ActiveLink>
	);
};
