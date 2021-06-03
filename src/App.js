import { Component } from "react";

import "./App.scss";
import SidebarHeader from "./components/sidebar-header/SidebarHeader";
import About from "./pages/about-page/About";
import Projects from "./pages/projects-page/Projects";
import Contact from "./pages/contact-page/Contact";
import Messages from "./pages/messages-page/Messages";

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollListener = this.scrollListener.bind(this);
    this.messageListener = this.messageListener.bind(this);
    this.state = {
      pagePos: 0,
      messagesAuth: false,
      messageKey: [],
    };
  }

  scrollListener = (scrollEvent) => {
    this.setState({
      ...this.state,
      pagePos: scrollEvent.target.documentElement.scrollTop,
    });
  };

  messageListener = (keyEvent) => {
    let lastKeyIndex = this.state.messageKey.length;

    let messagesKey = [
      ...process.env.REACT_APP_PORTFOLIO_MESSAGESKEY.split(""),
    ];
    if (keyEvent.key === messagesKey[lastKeyIndex]) {
      this.setState({ messageKey: [...this.state.messageKey, keyEvent.key] });

      if (this.state.messageKey.length === messagesKey.length) {
        this.setState({
          messageKey: [],
          messagesAuth: !this.state.messagesAuth,
        });
      }
    } else {
      this.setState({ messageKey: [] });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    window.addEventListener("keydown", this.messageListener);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
    window.removeEventListener("scroll", this.messageListener);
  }

  render() {
    return (
      <div className="App">
        <SidebarHeader
          selectedButton={this.state.pagePos}
          messagesAuth={this.state.messagesAuth}
        />
        <div className="route-content-container">
          <About />
          <Projects />
          <Contact />
          {this.state.messagesAuth ? <Messages /> : null}
        </div>
      </div>
    );
  }
}

export default App;
