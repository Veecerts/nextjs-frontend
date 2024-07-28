import SidebarLayout from "@/components/layouts/l-sidebar-layout";
import React from "react";

interface Props {
	children?: React.ReactNode;
}

const ConsoleLayout: React.FC<Props> = ({ children }) => {
	return <SidebarLayout>{children}</SidebarLayout>;
};

export default ConsoleLayout;
