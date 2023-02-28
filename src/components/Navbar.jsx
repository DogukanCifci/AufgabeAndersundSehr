import React from "react";
//Style Import
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar__left">
          <div className="navbar__left-top">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/200/601/non_2x/triangle-logo-png.png"
              alt=""
            />
            <div>
              <span>ARCHI</span> NEXT
            </div>
          </div>
          <div className="navbar__left-down">
            We have a passion in creating new and <span>unique spaces</span>
          </div>
        </div>

        <div className="navbar__right">
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#solutions">SOLUTIONS</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
