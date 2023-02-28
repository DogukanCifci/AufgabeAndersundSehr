import React from "react";
import "../styles/navbar.scss";

const Header = () => {
  return (
    <div className="h-[700px] bg-slate-500 background-image">
      <div className="pt-[180px] container text-4xl font-medium text-white  border">
        <p className="w-80">
          We have a passion in creating new and
          <span className="text-bold">unique spaces</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
