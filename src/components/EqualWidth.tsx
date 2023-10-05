type Props = { children: React.ReactNode };

export const EqualWidth = ({ children }: Props) => {
  return <div className="flex flex-col flex-1 gap-3 sm:flex-row">{children}</div>;
};
