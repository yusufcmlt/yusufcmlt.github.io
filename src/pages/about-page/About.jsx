import React from "react";
import { skillsList, randomNumber } from "../../utils/skills-list";
import "./About.style.scss";
import { SkillItem } from "./skill-item/SkillItem";

const About = () => {
  return (
    <section id="about" className="about-page-container">
      <div className="title-container">
        <h1>Hi!</h1>
      </div>
      <div className="about-content">
        <div className="description-p about-name">My name is Yusuf.</div>
        <div className="description-p">
          I'm a <span className="about-job">web developer / student </span>
          located in Turkey. I love turning ideas into web products. I'm deeply
          focused on{" "}
          <span className="about-job ">front end web development </span>
          and
          <span className="passion-link">
            {" "}
            currently working on my design skills.
          </span>{" "}
          <img
            src="https://i.kym-cdn.com/photos/images/newsfeed/001/018/899/936.jpg"
            className="design-passion-image"
            alt="design passion"
          />
        </div>
        <div className="description-p skills-description">
          I'm creating web apps using:
        </div>
        <div className="skills-container">
          {skillsList.map((category, index) => (
            <div className="skill-block" key={category.title + index}>
              <h4>{category.title}</h4>
              <ul>
                {category.list.map((skill, index) => (
                  <SkillItem name={skill} key={skill + index} />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="description-p last">
          You can check out some of my works below.
        </div>
      </div>
    </section>
  );
};

export default About;
