import React from "react";
import "./Hero.css";
import profile from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="" />
      <h1><span>I'm Jenish Kothari</span>, Software Developer based in USA</h1>
      <div className="hero-action">
        <div className="connect-button">Connect with Me</div>
        <div className="resume-button">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
