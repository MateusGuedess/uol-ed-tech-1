import { appRoutes } from "@/constants/appRoutes";

export function usePrivateRoute(pathname: string) {
  let unprotectedRoutes = [appRoutes.SIGNIN_PAGE];

  let pathIsProtected = unprotectedRoutes.indexOf(pathname) === -1;

  return pathIsProtected;
}
