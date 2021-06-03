import React from "react";
import "./SkillItem.style.scss";
import "./SkillIcons.style.scss";

export const SkillItem = ({ name, children, ...props }) => {
  return (
    <div className="skill-item-container" {...props}>
      {children}
      <span
        className={`skill-icon ${
          name ? `icon-${name.toLowerCase().split(".").join("-")}` : null
        }`}
      />
      <span className="skill-text">{name}</span>
    </div>
  );
};
