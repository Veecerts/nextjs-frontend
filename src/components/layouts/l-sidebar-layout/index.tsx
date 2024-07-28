import ConsoleSidebar from "@/components/molecules/m-console-sidebar";
import React from "react";

interface Props {
	children?: React.ReactNode;
}
const SidebarLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="flex gap-4">
			<div className="fixed">
				<ConsoleSidebar />
			</div>
			<div className="flex-1 ml-96 p-6 max-h-screen  hoverflow-y-auto">
				{children}
			</div>
		</div>
	);
};

export default SidebarLayout;
