import { useEffect, useState } from "react";
import { Switch, withRouter, Route, Redirect } from "react-router-dom";

import "./App.scss";
import SidebarHeader from "./components/sidebar-header/SidebarHeader";
import About from "./pages/about-page/About";
import Projects from "./pages/projects-page/Projects";
import Contact from "./pages/contact-page/Contact";

const App = ({ history }) => {
  const [selectedPage, setSelectedPage] = useState("");

  useEffect(() => {
    //setting a selected page for background and selected buttons
    const pagePath = history.location.pathname
      .replace(process.env.PUBLIC_URL, "")
      .slice(1);
    setSelectedPage(pagePath);
    //changing background color according to selected page
    const indexBackground = document.querySelector("html");
    indexBackground.setAttribute(
      "class",
      `background-${selectedPage ? selectedPage : "about"}`
    );
  });

  return (
    <div className="App">
      <SidebarHeader
        selectedButton={selectedPage ? selectedPage : "about"}
      ></SidebarHeader>
      <div className="route-content-container">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={About} />
          <Route
            path={`${process.env.PUBLIC_URL}/projects`}
            component={Projects}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />
          <Route
            render={() => (
              <Redirect to={`${process.env.PUBLIC_URL}/projects`} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
