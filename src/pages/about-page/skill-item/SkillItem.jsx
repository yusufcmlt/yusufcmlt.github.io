import React from "react";
import "./SkillItem.style.scss";

export const SkillItem = ({ name, icon }) => {
  return (
    <div className="skill-item-container">
      <img className="skill-icon" src={icon} alt={name} />
      <span className="skill-text">{name}</span>
    </div>
  );
};
