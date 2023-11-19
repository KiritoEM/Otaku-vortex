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
  sendCode: (e: any) => void;
}

const APIContext = createContext<IAPIContext | null>(null);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {

  //code state
  const [code, setCode] = useState("");

  //sendCode to node js
  const sendCode = (e: any) => {
      
  };

  return (
    <APIContext.Provider
      value={{
        sendCode
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
