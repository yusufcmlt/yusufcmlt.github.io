import React from "react";

import "./About.style.scss";
import aboutPageText from "../../utils/about-page-text";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page-container">
      <h1>Hello!</h1>
      <div className="description-p about-name">My name is Yusuf Cemal.</div>
      <div className="description-p">
        I am a <span className="about-job">web developer / student</span> living
        in Turkey. I'm deeply interested in{" "}
        <span className="about-job">front end web development </span> and
        developing apps using:
        <div className="tools-image" />
        You can check some of my projects{" "}
        <Link
          to={`${process.env.PUBLIC_URL}/projects`}
          className="projects-link"
        >
          here.
        </Link>
      </div>
    </div>
  );
};

export default About;
