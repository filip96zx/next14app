"use client";
import { useRouter } from "next/navigation";
import { type Route } from "next";
import { Button } from "./shared/Button";

export function CloseModalAndNavigateButton({
	children,
	navigateTo,
}: {
	children: React.ReactNode;
	navigateTo: Route;
}) {
	const router = useRouter();
	return (
		<Button
			onClick={() => {
				router.replace(navigateTo);
				router.refresh();
			}}
			variant="primary"
		>
			{children}
		</Button>
	);
}
