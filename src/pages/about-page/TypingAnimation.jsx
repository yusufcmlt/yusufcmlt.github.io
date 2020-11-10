import React, { Component } from "react";
import Typical from "react-typical";

class TypingAnimation extends Component {
  state = {
    firstText: "",
    secondText: "",
  };
  componentDidMount() {
    this.setState({
      firstText: "Front End Developer",
      secondText: "Student",
    });
  }

  render() {
    return (
      <Typical
        className="typing-p"
        steps={[this.state.firstText, 3000, this.state.secondText, 2000]}
        loop={Infinity}
        wrapper="span"
      />
    );
  }
}

export default TypingAnimation;
