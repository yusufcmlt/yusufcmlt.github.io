import React from "react";
import { Link } from "react-router-dom";

import "./SidebarButton.style.scss";

const SidebarButton = ({ pagePath, pageName, selectedButton }) => {
  return (
    <Link
      to={pagePath}
      className={`sidebar-button ${pageName.toLowerCase()} ${
        pageName.toLowerCase() === selectedButton ? "selected" : ""
      }`}
    >
      <span className={`button-icon ${pageName.toLowerCase()}`}></span>
      {pageName}
    </Link>
  );
};

export default SidebarButton;
