import React, { useEffect, useState } from "react";
import "./Projects.style.scss";
import projectsList from "../../utils/projects-list";
import ProjectItem from "./project-item/ProjectItem";

const Projects = () => {
  const [projectItems, setProjectItems] = useState([]);

  useEffect(() => {
    setProjectItems([]);
    setProjectItems([...projectsList]);
  }, []);

  const randomKey = (indexSent) => {
    return Math.round(Math.random() * 10000) + indexSent;
  };

  return (
    <div id="projects" className="projects-page-container">
      <h1>Projects</h1>
      <p>Some projects that i've worked on.</p>
      <div className="projects-container">
        {projectItems.map((project, index) => (
          <ProjectItem
            key={randomKey(index)}
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
