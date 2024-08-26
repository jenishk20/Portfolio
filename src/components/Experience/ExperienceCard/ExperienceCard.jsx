import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-ex-card">
      <h3 className="work-title">{details.title}</h3>
      <h4 className="work-company">{details.company}</h4>
      <div className="work-duration">{details.date}</div>
      <div className="work-location">{details.location}</div>
      <div className="work-skills">{details.skills}</div>
      <ul className="work-responsibilities">
        {details?.responsibilities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
