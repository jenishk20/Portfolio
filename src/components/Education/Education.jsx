import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { education } from "../../utils/constants";

const Education = () => {
  return (
    <div className="education-section">
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="education-container">
        {education.map((item) => {
          return (
            <div className="education-details">
              <img src={item?.logo}></img>
              <div className="university-details">
                <h1 className="name">{item?.institution}</h1>
                <h3 className="degree">{item?.degree}</h3>
                <div className="duration">{item?.duration}</div>
                <div className="location">{item?.location}</div>
                <div className="cgpa">{item?.cgpa}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
