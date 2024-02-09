"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function CartLink({ children }: { children: React.ReactNode }) {
	const path = usePathname();
	const isActive = !path.startsWith("/cart");
	return (
		<Link href="/cart" className={clsx(!isActive && "pointer-events-none rounded-lg bg-blue-300")}>
			{children}
		</Link>
	);
}
