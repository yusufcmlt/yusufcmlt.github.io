import React, { useEffect, useState } from "react";
import projectList from "../../../utils/projects-list";
import { SkillItem } from "../../about-page/skill-item/SkillItem";

import "./PopUpInfo.style.scss";

export default function PopUpInfo({ projectIndex, handleProjectPopup }) {
  const { title, video, links, text, tags } = projectList[projectIndex];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  return (
    <>
      <div className="popup-background" onClick={() => handleProjectPopup()} />
      <div className={`popup-container ${isMounted ? "enter" : ""}`}>
        <button className="close-popup" onClick={() => handleProjectPopup()} />
        <video className="vid-container" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>

        <div className="info-container">
          <h2>{title}</h2>
          <div className="links-container">
            <SkillItem name="Github">
              <a
                className="link github-link"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                {}
              </a>
            </SkillItem>
            <SkillItem name="Web">
              <a
                className="link web-link"
                href={links.web}
                target="_blank"
                rel="noreferrer"
              >
                {}
              </a>
            </SkillItem>
          </div>
          <p>{text}</p>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
