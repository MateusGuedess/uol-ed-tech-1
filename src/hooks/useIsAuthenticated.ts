export function useIsAuthenticated() {
  const userToken = JSON.parse(localStorage.getItem("authUOL"));

  return !!userToken;
}
