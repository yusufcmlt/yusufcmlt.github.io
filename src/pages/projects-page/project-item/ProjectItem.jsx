import React from "react";
import "./ProjectItem.style.scss";
const ProjectItem = ({ title, image, text, links, tags }) => {
  return (
    <div className="project-item-container">
      <div className="project-info">
        <div className="project-head">
          <h3 className="project-title">{title}</h3>
          <a
            target="_blank"
            rel="noreferrer"
            className="project-link github"
            href={links.github}
          >
            {""}
          </a>
          <a
            className="project-link web"
            target="_blank"
            rel="noreferrer"
            href={links.web}
          >
            {""}
          </a>
        </div>
        <p className="project-text">{text}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div
        className="project-image"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

export default ProjectItem;
