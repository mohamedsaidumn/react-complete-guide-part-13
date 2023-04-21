import { Fragment } from "react";
import MainHeader from "./MainHeader";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
