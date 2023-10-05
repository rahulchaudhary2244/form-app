type Props = { children: React.ReactNode; key: number | string };

const EqualWidth = ({ children, key }: Props) => {
  return (
    <div key={key} className="flex flex-col flex-1 gap-3 sm:flex-row">
      {children}
    </div>
  );
};

export default EqualWidth;
