import React from "react";
import SideBarButton from "./SideBarButton";
import { Home, User, Briefcase, Mail } from "react-feather";

import "../styles/Layout.scss";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <SideBarButton id='sidebarButton-home' to="/" title='Home' Icon={Home} />
      <SideBarButton id='sidebarButton-about' to="/about" title='About' Icon={User} />
      <SideBarButton id='sidebarButton-portfolios' to="/portfolio" title='Portfolio' Icon={Briefcase} />
      <SideBarButton id='sidebarButton-contact' to="/contact" title='Contact' Icon={Mail} />
    </div>
  );
};

export default SideBar;
