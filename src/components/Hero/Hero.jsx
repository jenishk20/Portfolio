import React from "react";
import "./Hero.css";
import profile from "../../assets/pro.png";

const Hero = () => {
  return (
    <div id = "home" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Jenish Kothari</span>
        <br></br> Software Developer based in Boston - USA
      </h1>
      <div className="hero-action">
        <div className="connect-button">Connect with Me</div>
        <div className="resume-button">My Resume</div>
      </div>
      <div className="profile-buttons">
        <div className="linkedin-button"></div>
      </div>
    </div>
  );
};

export default Hero;
