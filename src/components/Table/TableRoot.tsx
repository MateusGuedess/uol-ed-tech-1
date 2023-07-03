import { ReactNode } from "react";

interface TableRoot {
  children: ReactNode;
}

function TableRoot({ children }: TableRoot) {
  return <div className="flex flex-col w-full">{children}</div>;
}

export default TableRoot;
