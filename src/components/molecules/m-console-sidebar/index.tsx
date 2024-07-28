"use client";

import LogoLink from "@/components/atoms/a-logo-link";
import { Separator } from "@/components/ui/separator";
import SIDEBAR_NAV from "@/constants/navigations/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ConsoleSidebar = () => {
	const pathname = usePathname();
	return (
		<aside className="w-screen max-w-[350px] rounded-r-2xl border-r h-screen flex flex-col p-6">
			<div>
				<div className="py-4">
					<LogoLink />
				</div>
				<Separator />
				<ul className="flex flex-col gap-2 py-8">
					{SIDEBAR_NAV.map((nav) => (
						<Link
							data-active={
								nav.href === "/console"
									? pathname === nav.href
									: pathname.startsWith(nav.href)
							}
							className="flex items-center gap-4 data-[active=true]:bg-foreground data-[active=true]:text-background hover:bg-foreground hover:text-background p-4 px-6 rounded-full transition-all text-lg"
							href={nav.href}
							key={nav.href}
						>
							{nav.icon && <span className="text-xl">{nav.icon}</span>}
							<span>{nav.title}</span>
						</Link>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default ConsoleSidebar;
