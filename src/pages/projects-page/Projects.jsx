import React from "react";
import "./Projects.style.scss";

import ProjectItem from "../projects-page/project-item/ProjectItem";
import projectList from "../../utils/projects-list";

const Projects = () => {
  return (
    <div id="projects" className="projects-page-container">
      <h2 className="section-h2">Projects</h2>
      <p className="section-h2-subtitle">Some projects that i've worked on.</p>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectItem
            key={index}
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
