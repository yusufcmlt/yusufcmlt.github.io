import { Component } from "react";

import "./App.scss";
import SidebarHeader from "./components/sidebar-header/SidebarHeader";
import About from "./pages/about-page/About";
import Projects from "./pages/projects-page/Projects";
import Contact from "./pages/contact-page/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagePos: 0,
    };
  }
  componentDidMount() {
    const onScroll = (e) => {
      this.setState({
        ...this.state,
        pagePos: e.target.documentElement.scrollTop,
      });
    };
    window.addEventListener("scroll", onScroll);
  }

  render() {
    return (
      <div className="App">
        <SidebarHeader selectedButton={this.state.pagePos}></SidebarHeader>
        <div className="route-content-container">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
