import React, { FunctionComponent } from "react";
import { IconProps } from "react-feather";
import { NavLink } from "react-router-dom";
import "../styles/Layout.scss";

interface ISideBarButton {
  to: string;
  title: string;
  Icon: FunctionComponent<IconProps>;
}
const SideBarButton = ({ to, Icon, title }: ISideBarButton) => {
  return (
    <div>
      <NavLink
        exact={true}
        className="sideBatButton"
        activeClassName="sideBatButton-active"
        to={to}
      >
        {<Icon />}
        <h2 className="sideBarButton-title">{title}</h2>
      </NavLink>
    </div>
  );
};

export default SideBarButton;
