import React from "react";
import SidebarButton from "../siderbar-button/SidebarButton";
import "./SidebarHeader.style.scss";
const SidebarHeader = ({ selectedButton }) => {
  return (
    <nav className="sidebar-buttons-container">
      <SidebarButton pageName="About" selectedButton={selectedButton} />
      <SidebarButton pageName="Projects" selectedButton={selectedButton} />
      <SidebarButton pageName="Contact" selectedButton={selectedButton} />
    </nav>
  );
};

export default SidebarHeader;
