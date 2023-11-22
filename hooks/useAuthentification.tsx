import React, { ReactNode, createContext, useContext, useState } from "react";

export interface IAuthContext {
  setLocalToken: (e: string) => void;
  getToken: () => string | null;
}

interface IAuthProvider {
  children?: ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [token, setToken] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      return storedToken;
    }

    return null;
  });

  const setLocalToken = (tk: string) => {
    console.log(tk);
    localStorage.setItem("token", tk);
    setToken(String);
  };

  const getToken = () => {
    return token;
  };

  const clearToken = () => {
    setToken(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        setLocalToken,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
//exportation du hooks
export const useAuthentification = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
