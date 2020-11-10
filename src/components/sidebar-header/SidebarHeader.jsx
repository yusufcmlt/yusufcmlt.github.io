import React from "react";
import SidebarButton from "../siderbar-button/SidebarButton";
import "./SidebarHeader.style.scss";
const SidebarHeader = ({ selectedButton }) => {
  const buttonSelected = selectedButton ? selectedButton : "about";

  return (
    <div className="sidebar-container">
      <div className="sidebar-image" />
      <hr className={`sidebar-hr ${selectedButton}`} />
      <div className="sidebar-buttons-container">
        <SidebarButton
          pageName="About"
          pagePath="/"
          selectedButton={buttonSelected}
        />
        <SidebarButton
          pageName="Projects"
          pagePath="/projects"
          selectedButton={buttonSelected}
        />
        <SidebarButton
          pageName="Contact"
          pagePath="/contact"
          selectedButton={buttonSelected}
        />
      </div>
      <hr className={`sidebar-hr ${selectedButton}`} />
      <div className="sidebar-language"></div>
    </div>
  );
};

export default SidebarHeader;
