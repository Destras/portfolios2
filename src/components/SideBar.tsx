import React from "react";
import SideBarButton from "./SideBarButton";
import { Home, User, Briefcase } from "react-feather";

import "../styles/Layout.scss";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <SideBarButton to="/" title='Home' Icon={Home} />
      <SideBarButton to="/about" title='About' Icon={User} />
      <SideBarButton to="/portfolio" title='Portfolio' Icon={Briefcase} />
    </div>
  );
};

export default SideBar;
