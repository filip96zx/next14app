import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Link from "next/link";
import { ActiveLink } from "@/app/ui/atoms/ActiveLink";
import { SearchInput } from "@/app/ui/atoms/inputs";
import { getMetadataTitle } from "@/app/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: getMetadataTitle(),
	description: "Next 13 shop",
};

const navLinks = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products", label: "All" },
	{ href: "/categories/t-shirts", label: "T-Shirts" },
	{ href: "/collections", label: "Collections" },
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<div className="mx-auto mt-2 flex max-w-screen-xl justify-between">
					<nav>
						<Suspense>
							<ul className="flex justify-center space-x-4">
								{navLinks.map((nl) => {
									return (
										<li key={nl.label}>
											<ActiveLink {...nl}>{nl.label}</ActiveLink>
										</li>
									);
								})}
							</ul>
						</Suspense>
					</nav>
					<SearchInput />
					<Link href="/cart">Cart</Link>
				</div>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer className="text-center text-sm text-gray-500">© 2023 Filip Cudny</footer>
			</body>
		</html>
	);
}
