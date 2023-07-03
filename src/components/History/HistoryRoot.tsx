import { ReactNode } from "react";

interface HistoryRootProps {
  children: ReactNode;
  className?: string;
}

function HistoryRoot({ children, className }: HistoryRootProps) {
  return <div className={className}>{children}</div>;
}

export default HistoryRoot;
