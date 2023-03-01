import React, { useEffect, useState } from "react";
//Style Import
import "../styles/navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false); //Für Hamburger Menu
  const [backgroundColor, setBackgroundColor] = useState(false); //Für die Farbeänderung von Navbar beim Scrollen

  //Wenn der Benutzer die Maus scrollt, wird die Farbe von Navbar scharz sein
  const changeBgColor = () => {
    if (window.scrollY > 0) {
      setBackgroundColor(true);
    } else {
      setBackgroundColor(false);
    }
  };
  useEffect(() => {
    changeBgColor();
    window.addEventListener("scroll", changeBgColor);
  }, []);
  //-----------

  return (
    <div
      className="fixed pt-11 top-0 right-0 left-0 transition-all duration-500"
      style={
        backgroundColor
          ? {
              backgroundColor: "rgba(0,0,0,.7)",
              boxShadow: "0 4px 10px 0 rgba(0,0,0,.03)",
              padding: "30px 0",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="flex justify-between h-[80px] items-center container px-5">
        <div className="">
          <div className="flex items-center ">
            <img
              src="https://w7.pngwing.com/pngs/248/981/png-transparent-triangle-logo-brand-triangle-angle-white-text-thumbnail.png"
              alt=""
              className="w-[60px]"
            />
            <div className="text-white baslik">
              <span className="font-extrabold ml-4 mr-1">ARCHI</span> NEXT
            </div>
          </div>
        </div>

        <div className="navbar__right hidden md:flex">
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
              <a href="#blogs">BLOG</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <AiOutlineMenu
          className="text-white text-4xl md:hidden"
          onClick={() => setOpen(!open)}
        />
        <div
          className={`md:hidden absolute top-[80px] right-0 text-white text-bold w-full ${
            open ? "h-[150px]" : "h-0"
          } transition-all duration-300 overflow-hidden`}
        >
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
