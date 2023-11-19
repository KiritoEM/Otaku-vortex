import { Fragment, ReactNode } from "react";
import { NavProvider } from "@/hooks/useNav";

interface Iprops {
  children: ReactNode;
}
const AppProvider: React.FC<Iprops> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <NavProvider>{children}</NavProvider>
    </Fragment>
  );
};

export default AppProvider;
