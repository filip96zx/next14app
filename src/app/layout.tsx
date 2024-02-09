import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { getMetadataTitle } from "@/utils";
import { Navbar } from "@/ui/molecules/Navbar";
import { ProductCacheContextProvider } from "@/services/product-cache.service";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: getMetadataTitle(),
	description: "Next 13 shop",
};

export default async function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal?: React.ReactNode;
}) {
	
	return (
		<html lang="pl">
			<body className={clsx(inter.className, "flex min-h-screen flex-col")}>
				<ProductCacheContextProvider>
					<Navbar />
					<div className="mx-auto max-w-md flex-grow p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
						{children}
					</div>
					<footer className="mb-4 text-center text-sm text-gray-500">© 2023 Filip Cudny</footer>
				</ProductCacheContextProvider>
				{modal}
			</body>
		</html>
	);
}
