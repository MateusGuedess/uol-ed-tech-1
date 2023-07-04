"use client";

import { History } from "@/components";
import Header from "@/components/Header";
import { HistoryContext } from "@/context/historyContext";
import { usePathname } from "next/navigation";
import { useContext } from "react";

interface ILayoutProvider {
  children: React.ReactNode;
}

function LayoutProvider({ children }: ILayoutProvider) {
  const pathname = usePathname();
  const { history } = useContext(HistoryContext);
  return (
    <>
      {pathname != "/auth/signin" && pathname != "/auth/signup" && <Header />}
      <div className="flex">
        {children}
        <History.Root className="w-[300px] mx-5">
          <History.Title title="Atividades" />
          {history?.map((item) => (
            <>
              <History.Content
                key={item?.id}
                action={item?.action}
                photo=""
                title=""
                date="27/07"
                comment={item?.comment ?? item?.comment}
              />
            </>
          ))}
        </History.Root>
      </div>
    </>
  );
}

export default LayoutProvider;
