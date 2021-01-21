import React, { useEffect, useState } from "react";

import "./SidebarButton.style.scss";

const SidebarButton = ({ pagePath, pageName, selectedButton }) => {
  const [buttonSelected, setButtonSelected] = useState(false);

  useEffect(() => {
    const buttonsPage = document.getElementById(pageName.toLowerCase());

    setButtonSelected(
      selectedButton >= buttonsPage.offsetTop - buttonsPage.offsetHeight / 3 &&
        selectedButton < buttonsPage.offsetTop + buttonsPage.offsetHeight / 2
    );
  });

  return (
    <a
      href={pagePath}
      className={`sidebar-button ${pageName.toLowerCase()} ${
        buttonSelected ? "selected" : ""
      }`}
    >
      <span className={`button-icon ${pageName.toLowerCase()}`}></span>
      {pageName}
    </a>
  );
};

export default SidebarButton;
