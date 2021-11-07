import React from "react";
import "../styles/Layout.scss";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="layout">
      <div className="layout_content">{children}</div>
    </div>
  );
};

export default Layout;
