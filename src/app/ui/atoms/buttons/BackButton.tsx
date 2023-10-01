import { type Route } from "next";
import { ActiveLink } from "./shared/ActiveLink";
import { secondaryButtonClassName } from "@/app/ui/atoms/buttons/shared/style";

type TProps = { children?: React.ReactNode; href: Route; keepSearchParams?: boolean };

export const BackButton = ({ children, href, keepSearchParams }: TProps) => {
	return (
		<ActiveLink
			className={secondaryButtonClassName}
			href={href}
			keepSearchParams={keepSearchParams}
		>
			{children || "Back"}
		</ActiveLink>
	);
};
