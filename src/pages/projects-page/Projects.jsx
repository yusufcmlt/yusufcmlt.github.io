import React, { useState } from "react";
import "./Projects.style.scss";

import ProjectItem from "../projects-page/project-item/ProjectItem";
import projectList from "../../utils/projects-list";
import PopUpInfo from "./pop-up-info/PopUpInfo";

const Projects = () => {
  const [projectPopup, setProjectPopup] = useState({
    toggle: false,
    projectID: 0,
  });

  function handleProjectPopup(projectIndex = 0) {
    const bodyElement = document.getElementsByTagName("BODY")[0];
    if (!projectPopup.toggle) {
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.overflow = "visible";
    }
    setProjectPopup({ toggle: !projectPopup.toggle, projectID: projectIndex });
  }

  return (
    <>
      {projectPopup.toggle ? (
        <PopUpInfo
          handleProjectPopup={handleProjectPopup}
          projectIndex={projectPopup.projectID}
        />
      ) : null}
      <section id="projects" className="projects-page-container">
        <div className="title-container">
          <h1>
            Works<span>Some projects i've worked on.</span>
          </h1>
        </div>
        <div className="projects-content">
          {projectList.map((project, index) => (
            <ProjectItem
              key={index}
              projectIndex={index}
              data={{ ...project }}
              handleProjectPopup={handleProjectPopup}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
