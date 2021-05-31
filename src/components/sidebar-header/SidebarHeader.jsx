import React from "react";
import SidebarButton from "../siderbar-button/SidebarButton";
import "./SidebarHeader.style.scss";
const SidebarHeader = ({ selectedButton }) => {
  return (
    <div className="sidebar-buttons-container">
      <SidebarButton
        pageName="About"
        pagePath={`#top`}
        selectedButton={selectedButton}
      />
      <SidebarButton
        pageName="Projects"
        pagePath="#projects"
        selectedButton={selectedButton}
      />
      <SidebarButton
        pageName="Contact"
        pagePath={`#contact`}
        selectedButton={selectedButton}
      />
    </div>
  );
};

export default SidebarHeader;
