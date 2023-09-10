"use client";

import clsx from "clsx";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type TProps<T> = {
	href: LinkProps<T>["href"];
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
};

export function ActiveLink<T>({
	children,
	href,
	className = "mt-2 text-blue-500 hover:text-blue-700",
	activeClassName = "underline",
}: TProps<T>) {
	const currentPath = usePathname();
	const isActive = currentPath === href;
	return (
		<Link href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
}
