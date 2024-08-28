import React from "react";
import "./Certification.css";
import saa from "../../assets/saa_1.png";
import dva from "../../assets/dva_1.png";
import clf from "../../assets/clf_1.png";
import theme_pattern from "../../assets/theme_pattern.svg";

const Certification = () => {
  return (
    <div id = "certification" className="certification-section">
      <div className="certification-title">
        <h1>Certifications</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="certification-data">
        <img src={clf} alt=""></img>
        <img src={saa} alt=""></img>
        <img src={dva} alt=""></img>
      </div>
    </div>
  );
};

export default Certification;
