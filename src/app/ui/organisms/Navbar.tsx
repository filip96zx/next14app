import { Suspense } from "react";
import Link from "next/link";
import { getCartTotalItemsByCookiesCartId } from "@/app/services/cart.service";
import { ActiveLink, Button } from "@/app/ui/atoms/buttons";
import { SearchInput } from "@/app/ui/atoms/inputs";

const navLinks = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products", label: "All" },
	{ href: "/categories/t-shirts", label: "T-Shirts" },
	{ href: "/collections", label: "Collections", activeRoutePattern: `^\/collection\/.*` },
] as const;
export const Navbar = async () => {
	const totalItems = await getCartTotalItemsByCookiesCartId();

	return (
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
			<div>
				<SearchInput />
				<Link href="/cart">
					<Button>
						Cart <Suspense>{totalItems}</Suspense>
					</Button>
				</Link>
			</div>
		</div>
	);
};
