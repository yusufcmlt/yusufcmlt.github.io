import { useEffect, useState } from "react";
import { Switch, useHistory, withRouter } from "react-router-dom";

import "./App.scss";
import SidebarHeader from "./components/sidebar-header/SidebarHeader";

const App = ({ history }) => {
  const [selectedPage, setSelectedPage] = useState("");

  useEffect(() => {
    //setting a selected page for background and selected buttons
    setSelectedPage(
      history.location.pathname.replace(process.env.PUBLIC_URL, "").slice(1)
    );
    //changing background color according to selected page
    const indexBackground = document.querySelector("html");
    indexBackground.setAttribute(
      "class",
      `background-${selectedPage ? selectedPage : "about"}`
    );
  });

  return (
    <div className="App">
      <SidebarHeader selectedButton={selectedPage}></SidebarHeader>
      <div className="route-content-container">
        <Switch></Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
