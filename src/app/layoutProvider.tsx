"use client";

import Header from "@/components/Header";
import { usePathname } from "next/navigation";

interface ILayoutProvider {
  children: React.ReactNode;
}

function LayoutProvider({ children }: ILayoutProvider) {
  const pathname = usePathname();
  return (
    <>
      {pathname != "/auth/signin" && pathname != "/auth/signup" && <Header />}
      {children}
    </>
  );
}

export default LayoutProvider;
