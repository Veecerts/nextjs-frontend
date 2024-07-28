import { NavItem } from "./types";
import MageDashboard3Fill from "~icons/mage/dashboard-3-fill.jsx";
import SolarFolderWithFilesBold from "~icons/solar/folder-with-files-bold.jsx";

const SIDEBAR_NAV: NavItem[] = [
	{
		title: "Dashboard",
		href: "/console",
		icon: <MageDashboard3Fill />,
	},
	{
		title: "Files",
		href: "/console/files",
		icon: <SolarFolderWithFilesBold />,
	},
] as const;

export default SIDEBAR_NAV;
