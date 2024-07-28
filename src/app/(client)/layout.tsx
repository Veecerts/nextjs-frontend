import NavLayout from "@/components/layouts/l-nav-layout";

interface Props {
	children?: React.ReactNode;
}

const ClientLayout: React.FC<Props> = ({ children }) => {
	return <NavLayout>{children}</NavLayout>;
};

export default ClientLayout;
