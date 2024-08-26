import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { workExperience } from "../../utils/constants";

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="experience-title">
        <h1>My Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="experience-details">
        {workExperience.map((experience) => {
          return <ExperienceCard key={experience?.id} details={experience} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
