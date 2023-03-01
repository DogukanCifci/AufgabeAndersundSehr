import React from "react";
import "../styles/navbar.scss";

const Header = () => {
  return (
    <div
      className="h-[700px] bg-slate-500 background-image pseudo-element"
      id="up"
    >
      <div className="pt-[220px] container text-4xl font-light text-white">
        <p className="w-96 header-text">
          We have a passion in creating new and
          <span className="text-bold font-bold"> unique spaces</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
