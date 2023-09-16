"use client";

import clsx from "clsx";
import { type Route } from "next";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type TProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export function ActiveLink<T extends string>({
	children,
	href,
	exact,
	className = "mt-2 text-blue-500 hover:text-blue-700",
	activeClassName = "underline",
}: TProps<T>) {
	const currentPath = usePathname();
	const searchParams = useSearchParams().toString();
	const urlSearchParams = searchParams ? `?${searchParams}` : "";
	const isActive = exact ? currentPath + urlSearchParams === href : currentPath.startsWith(href);

	return (
		<Link href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
}
