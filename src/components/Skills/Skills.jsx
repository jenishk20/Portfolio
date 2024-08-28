import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { skills } from "../../utils/constants";

const Skills = () => {
  return (
    <div id = "skills" className="skills">
      <div className="skill-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skill-container">
        {skills.map((skill) => {
          return (
            <div key={skill?.id} className="skill-details">
              <h3>{skill.skill_id}</h3>
              <h2>{skill.skill_name}</h2>
              <div className="subskills">
                {skill.subskills.map((subskill, index) => (
                  <div key={index} className="subskill">
                    {subskill}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
