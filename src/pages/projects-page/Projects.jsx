import React from "react";
import "./Projects.style.scss";
import projectsList from "../../utils/projects-list";
import ProjectItem from "./project-item/ProjectItem";

const Projects = () => {
  const randomKey = () => {
    return Math.round(Math.random() * 1000);
  };

  return (
    <div className="projects-page-container">
      <h1>Some of My Work</h1>
      <p>
        Some work i did while i was learning, freelancing etc.
        <small className="small-text">(mostly learning.)</small>
      </p>
      <div className="projects-container">
        {projectsList.map((project) => (
          <ProjectItem
            key={randomKey()}
            title={project.title}
            image={project.image}
            text={project.text}
            links={project.links}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
