import React from "react";
import skillsList from "../../utils/skills-list";
import "./About.style.scss";
import { SkillItem } from "./skill-item/SkillItem";

const About = () => {
  return (
    <div id="about" className="about-page-container">
      <h1>Hello!</h1>
      <div className="description-p about-name">My name is Yusuf.</div>
      <div className="description-p">
        I am a <span className="about-job">web developer / student </span>
        located in Turkey. I love turning ideas into web products. I'm deeply
        focused on{" "}
        <span className="about-job ">front end web development </span>
        and
        <span className="passion-link">
          {" "}
          working on sharpening my design skills.
        </span>{" "}
        <img
          src="https://i.kym-cdn.com/photos/images/newsfeed/001/018/899/936.jpg"
          className="design-passion-image"
          alt="design passion"
        />
      </div>
      <div className="description-p skills-description">
        I'm developing web apps using:
      </div>
      <div className="skills-container">
        {skillsList.map((skillItem, index) => (
          <SkillItem name={skillItem.name} key={index} icon={skillItem.icon} />
        ))}
      </div>
    </div>
  );
};

export default About;
