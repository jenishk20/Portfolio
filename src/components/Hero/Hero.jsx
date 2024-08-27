import React from "react";
import {useState,useEffect} from "react";
import "./Hero.css";
import profile from "../../assets/pro.png";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Software Developer",
    "Competitive Programmer",
    "AI Practitioner",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <img src={profile} alt="" />
      <h1>
        I'm Jenish Kothari, <span className="title-animation">{titles[currentTitle]}</span>
      </h1>
      <div className="hero-action">
        <div className="connect-button">Connect with Me</div>
        <div className="resume-button">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
