import React from "react";
import "../styles/Layout.scss";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
