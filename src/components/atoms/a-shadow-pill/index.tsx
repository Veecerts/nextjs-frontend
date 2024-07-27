interface Props {
  children: React.ReactNode;
}

const ShadowPill: React.FC<Props> = ({ children }) => {
  return (
    <div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] p-3 px-6 rounded-full">
      {children}
    </div>
  );
};

export default ShadowPill;
