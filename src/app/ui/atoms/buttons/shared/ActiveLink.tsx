"use client";

import clsx from "clsx";
import { type Route } from "next";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { handleForwardSearchParams } from "@/app/utils";

type TProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
	keepSearchParams?: boolean;
	forceActive?: boolean;
	scroll?: boolean;
	activeRoutePattern?: string;
};

export function ActiveLink<T extends string>({
	children,
	href,
	exact,
	keepSearchParams,
	className = "mt-2 text-blue-500 hover:text-blue-700",
	activeClassName = "border-b border-blue-500",
	activeRoutePattern,
	scroll,
	forceActive,
}: TProps<T>) {
	const currentPath = usePathname();
	const searchParams = useSearchParams().toString();

	const checkRouteMatchActivePattern = () => {
		if (!activeRoutePattern) {
			return false;
		}
		return currentPath.match(new RegExp(activeRoutePattern));
	};
	const doesRoteMatch = exact ? currentPath + searchParams === href : currentPath.startsWith(href);
	const isActive = checkRouteMatchActivePattern() || doesRoteMatch || forceActive;

	return (
		<Link
			href={keepSearchParams ? (handleForwardSearchParams(href, searchParams) as Route<T>) : href}
			className={clsx(className, isActive && activeClassName)}
			role="link"
			scroll={scroll}
		>
			{children}
		</Link>
	);
}
