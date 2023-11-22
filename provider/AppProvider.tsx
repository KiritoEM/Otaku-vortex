import { Fragment, ReactNode } from "react";
import { NavProvider } from "@/hooks/useNav";
import { AuthProvider } from "@/hooks/useAuthentification";

interface Iprops {
  children: ReactNode;
}
const AppProvider: React.FC<Iprops> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <AuthProvider>
        <NavProvider>{children}</NavProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default AppProvider;
