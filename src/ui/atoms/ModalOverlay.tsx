"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";

export function ModalOverlay({ className }: { className?: string }) {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className={clsx("bg-slate-200 opacity-40 hover:cursor-pointer", className)}
		></div>
	);
}
