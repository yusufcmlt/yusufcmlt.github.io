import React, { useEffect, useState } from "react";
import projectList from "../../../utils/projects-list";
import { SkillItem } from "../../about-page/skill-item/SkillItem";

import "./PopUpInfo.style.scss";

export default function PopUpInfo({ projectIndex, handleProjectPopup }) {
  const { title, video, links, text, tags } = projectList[projectIndex];

  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  function handleLoadEnd() {
    console.log("Video Loaded");
    setLoading(false);
  }

  return (
    <>
      <div className="popup-background" onClick={() => handleProjectPopup()} />
      <div className={`popup-container ${isMounted ? "enter" : ""}`}>
        <button className="close-popup" onClick={() => handleProjectPopup()} />
        <div className="vid-container">
          <video autoPlay loop muted onLoadedData={handleLoadEnd}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="info-container">
          {isLoading ? (
            <div className="loading" />
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
