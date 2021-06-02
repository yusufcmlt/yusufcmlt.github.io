import React from "react";
import "./ProjectItem.style.scss";
const ProjectItem = ({ data, handleProjectPopup, projectIndex }) => {
  const { image, title } = data;
  return (
    <div
      onClick={() => {
        handleProjectPopup(projectIndex);
      }}
      className="project-item-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="project-title-container">
        <h5>{title}</h5>
      </span>
    </div>
  );
};

export default ProjectItem;
