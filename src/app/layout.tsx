"use client";
import { History } from "@/components";
import PrivateRoute from "@/components/PrivateRoute";
import HistoryProvider from "@/context/historyContext";
import UsersProvider from "@/context/usersContexts";
import { usePrivateRoute } from "@/hooks/usePrivateRoute";
import Providers from "@/utils/provider";
import { Source_Code_Pro } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import LayoutProvider from "./layoutProvider";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathIsProtected = usePrivateRoute(pathname);

  return (
    <html lang="en">
      <body className={`${sourceCodePro.className} `}>
        {!pathIsProtected && children}
        {pathIsProtected && (
          <Providers>
            <PrivateRoute>
              <HistoryProvider>
                <UsersProvider>
                  <LayoutProvider>
                    <div className="flex">
                      {children}
                      <History.Root className="w-[300px] mx-5">
                        <History.Title title="Atividades" />
                        <History.Content
                          action="Foto Atualizada"
                          photo=""
                          title=""
                          date=""
                        />
                        <History.Content
                          action="Nome Atualizado"
                          photo=""
                          title=""
                          date=""
                        />
                        <History.Content
                          action="Comentário"
                          photo=""
                          title=""
                          comment="teste teste teste"
                          date=""
                        />
                      </History.Root>
                    </div>
                  </LayoutProvider>
                </UsersProvider>
              </HistoryProvider>
            </PrivateRoute>
          </Providers>
        )}
      </body>
    </html>
  );
}
