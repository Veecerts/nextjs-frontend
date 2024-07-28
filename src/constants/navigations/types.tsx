export interface NavItem {
	title: string;
	href: string;
	icon?: React.ReactElement;
	children?: NavItem[];
}
