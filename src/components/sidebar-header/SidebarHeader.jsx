import React from "react";
import SidebarButton from "../siderbar-button/SidebarButton";
import "./SidebarHeader.style.scss";
const SidebarHeader = ({ selectedButton, messagesAuth }) => {
  return (
    <nav className="sidebar-buttons-container">
      <SidebarButton pageName="About" selectedButton={selectedButton} />
      <SidebarButton pageName="Projects" selectedButton={selectedButton} />
      <SidebarButton pageName="Contact" selectedButton={selectedButton} />
      {messagesAuth ? (
        <SidebarButton pageName="Messages" selectedButton={selectedButton} />
      ) : null}
    </nav>
  );
};

export default SidebarHeader;
