import { Fragment, ReactNode } from "react";
import Navbar from "@/components/dashboard/Navbar";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default Layout;
