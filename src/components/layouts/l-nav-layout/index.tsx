import TopNav from "@/components/atoms/a-top-nav";

interface Props {
  children: React.ReactNode;
}

const NavLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
};

export default NavLayout;
