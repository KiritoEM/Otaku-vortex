import React, {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAuthProvider {
  children?: ReactNode;
}

interface IAPIContext {
  sendEmailAPI: (e: any) => void;
}

const APIContext = createContext<IAPIContext | null>(null);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  //email state for API sent
  const sendEmailAPI = (e: any) => {
    useEffect(()=>{
       
    }, [])
  };

  return (
    <APIContext.Provider
      value={{
        sendEmailAPI
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(APIContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

function setPassword(value: any) {
  throw new Error("Function not implemented.");
}
