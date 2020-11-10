import React from "react";
import SidebarButton from "../siderbar-button/SidebarButton";
import "./SidebarHeader.style.scss";
const SidebarHeader = ({ selectedButton }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-image" />
      <hr className={`sidebar-hr ${selectedButton}`} />
      <div className="sidebar-buttons-container">
        <SidebarButton
          pageName="About"
          pagePath={`${process.env.PUBLIC_URL}/`}
          selectedButton={selectedButton}
        />
        <SidebarButton
          pageName="Projects"
          pagePath={`${process.env.PUBLIC_URL}/projects`}
          selectedButton={selectedButton}
        />
        <SidebarButton
          pageName="Contact"
          pagePath={`${process.env.PUBLIC_URL}/contact`}
          selectedButton={selectedButton}
        />
      </div>
      <hr className={`sidebar-hr ${selectedButton}`} />
      <div className="sidebar-language"></div>
    </div>
  );
};

export default SidebarHeader;
