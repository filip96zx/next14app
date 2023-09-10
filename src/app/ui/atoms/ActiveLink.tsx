"use client";

import clsx from "clsx";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type TProps<T> = {
	href: LinkProps<T>["href"];
	children: React.ReactNode;
};

export function ActiveLink<T>({ children, href }: TProps<T>) {
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
