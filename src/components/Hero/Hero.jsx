import React from "react";
import "./Hero.css";
import profile from "../../assets/pro.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Jenish Kothari</span>
        <br></br> Software Developer based in Boston - USA
      </h1>
      <div className="hero-action">
        <div className="connect-button">
          <a href="https://www.linkedin.com/in/jenishkothari/" target="_blank" className="connect-link">
            Connect with Me
          </a>
        </div>
        <div className="resume-button">
          <a href="https://resume-jk.s3.amazonaws.com/Resume_05_09/Jenish_Kothari_Resume.pdf" target="_blank" className="resume-link">
            My Resume
          </a>
        </div>
      </div>
      <div className="profile-buttons">
        <div className="linkedin-button"></div>
      </div>
    </div>
  );
};

export default Hero;
