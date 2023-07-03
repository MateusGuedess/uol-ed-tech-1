import { appRoutes } from "@/constants/appRoutes";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface PrivateRoutesProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRoutesProps) {
  const { push } = useRouter();

  const isUserAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(appRoutes.SIGNIN_PAGE);
    }
  }, [isUserAuthenticated, push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
}

export default PrivateRoute;
