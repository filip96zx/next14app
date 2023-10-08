import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMetadataTitle } from "@/app/utils";
import { Navbar } from "@/app/ui/molecules/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: getMetadataTitle(),
	description: "Next 13 shop",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<Navbar />
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer className="text-center text-sm text-gray-500">© 2023 Filip Cudny</footer>
			</body>
		</html>
	);
}
