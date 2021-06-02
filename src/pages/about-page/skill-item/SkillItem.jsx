import React from "react";
import "./SkillItem.style.scss";
import "./SkillIcons.style.scss";

export const SkillItem = ({ name }) => {
  return (
    <div className="skill-item-container">
      <span className={`skill-icon ${name ? `icon-${name}` : null}`} />
      <span className="skill-text">{name}</span>
    </div>
  );
};
