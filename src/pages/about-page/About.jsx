import React from "react";

import "./About.style.scss";
import aboutPageText from "../../utils/about-page-text";
import { Link } from "react-router-dom";
import TypingAnimation from "./TypingAnimation";

const About = () => {
  return (
    <div className="about-page-container">
      <h1>{aboutPageText.hello_message}</h1>
      <p className="description-p">My name is Yusuf Cemal.</p>
      <div className="description-p">
        I am a <TypingAnimation /> living in Turkey.
      </div>
      <p>I've used (or im using):</p>
      <div className="tools-image" />

      <Link to={`${process.env.PUBLIC_URL}/projects`} className="projects-link">
        in my projects
      </Link>
    </div>
  );
};

export default About;
