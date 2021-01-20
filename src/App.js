import { useEffect, useState } from "react";
import { Switch, withRouter, Route, Redirect } from "react-router-dom";

import "./App.scss";
import SidebarHeader from "./components/sidebar-header/SidebarHeader";
import About from "./pages/about-page/About";
import Projects from "./pages/projects-page/Projects";
import Contact from "./pages/contact-page/Contact";

const App = () => {
  const [pagePos, setPagePos] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setPagePos(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <SidebarHeader selectedButton={pagePos}></SidebarHeader>
      <div className="route-content-container">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
