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
        I am a <span className="about-job">web developer / student</span> living
        in Turkey. I'm deeply interested in{" "}
        <span className="about-job">front end web development </span> and
        developing apps using:
        <div className="skills-container">
          {skillsList.map((skillItem) => (
            <SkillItem name={skillItem.name} icon={skillItem.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
