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

  function handleClickScroll() {
    const buttonsPage = document.getElementById(pageName.toLowerCase());
    const windowWidth = window.innerWidth;
    if (windowWidth > 800) {
      window.scrollTo(0, buttonsPage.offsetTop - 75);
    } else {
      window.scrollTo(0, buttonsPage.offsetTop);
    }
  }

  return (
    <button
      onClick={handleClickScroll}
      className={`sidebar-button ${pageName.toLowerCase()} ${
        buttonSelected ? "selected" : ""
      }`}
    >
      <span className={`button-icon ${pageName.toLowerCase()}`} />
      {pageName}
    </button>
  );
};

export default SidebarButton;
