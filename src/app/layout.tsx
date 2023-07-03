"use client";
import PrivateRoute from "@/components/PrivateRoute";
import { usePrivateRoute } from "@/hooks/usePrivateRoute";
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
          <PrivateRoute>
            <LayoutProvider>{children}</LayoutProvider>
          </PrivateRoute>
        )}
      </body>
    </html>
  );
}
