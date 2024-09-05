import React from "react";
import { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/K.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openIcon = () => {
    console.log("Calling Open Icon");
    menuRef.current.style.right = "0";
  };
  const closeIcon = () => {
    console.log("Calling Closed Icon");
    menuRef.current.style.right = "-550px";
  };

  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="" />
      <img src={menu_open} onClick={openIcon} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeIcon}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            <p onClick={() => setMenu("education")}>Education</p>
          </AnchorLink>
          {menu === "education" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#experience">
            <p onClick={() => setMenu("experience")}>Experience</p>
          </AnchorLink>
          {menu === "experience" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
          {menu === "skills" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#certification">
            <p onClick={() => setMenu("certification")}>Certifications</p>
          </AnchorLink>
          {menu === "certification" ? <img src={underline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <a href="https://www.linkedin.com/in/jenishkothari/" target="_blank" className="connect-link">
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
