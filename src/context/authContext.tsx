"use client";
import { createContext, useState } from "react";

interface IAuthContext {
  isLoggedIn: boolean;
  handleLogin: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => setIsLoggedIn((prevState) => !prevState);

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        isLoggedIn,
      }}
    >
      AuthProvider
    </AuthContext.Provider>
  );
}
