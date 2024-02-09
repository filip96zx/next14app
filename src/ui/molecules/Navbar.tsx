import { Suspense } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/buttons";
import { SearchInput } from "@/ui/atoms/inputs";
import { GoCartButton } from "@/ui/atoms/buttons/GoCartButton";
import { Spinner } from "@/ui/atoms/Spinner";

const navLinks = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products", label: "All" },
	{ href: "/collections/1", label: "Collections", activeRoutePattern: `^\/collection\/.*` },
	{ href: "/category-list/1", label: "Categories" },
	{ href: "/categories/t-shirts", label: "T-Shirts" },
] as const;

export const Navbar = async () => {
	return (
		<div className="fixed left-[50%] top-0 mt-2 flex h-10 w-full max-w-screen-xl translate-x-[-50%] justify-between text-center">
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
			<div className="flex items-center gap-2">
				<SearchInput />
				<Suspense
					fallback={
						<span className="relative opacity-40">
							<Spinner centered width="20px" height="20px" borderWidth="3px" />
							<ShoppingCartIcon className="inline-block" />
						</span>
					}
				>
					<GoCartButton />
				</Suspense>
			</div>
		</div>
	);
};
