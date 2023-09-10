"use client";

import clsx from "clsx";
import { type Route } from "next";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
};

export function ActiveLink<T extends string>({ children, href }: TProps<T>) {
	const currentPath = usePathname();
	const isActive = currentPath === href;
	return (
		<Link
			href={href}
			className={clsx("mt-2` text-blue-500 hover:text-blue-700", {
				underline: isActive,
			})}
		>
			{children}
		</Link>
	);
}
