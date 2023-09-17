import { type Route } from "next";
import Link from "next/link";
import clsx from "clsx";
import { ActiveLink } from "@/app/ui/atoms/ActiveLink";

type TProps = {
	label: React.ReactNode;
	route: Route;
	className?: string;
	page: number;
	activeDisabled?: boolean;
	forceActive?: boolean;
};

const className = "text-2xl text-blue-500";
const activeClassName = "underline";
export const PaginationElement = ({ label, route, page, activeDisabled, forceActive }: TProps) => {
	const href = `${route}/${page}` as Route;

	return activeDisabled ? (
		<Link className={className} href={href}>
			{label}
		</Link>
	) : (
		<ActiveLink
			href={href}
			activeClassName={activeClassName}
			className={clsx(className, forceActive && activeClassName)}
			exact
		>
			{label}
		</ActiveLink>
	);
};
