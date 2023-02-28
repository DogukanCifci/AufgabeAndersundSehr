import React from "react";
//Style Import
import "../styles/upbutton.scss";
//React Icon Import
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const UpButton = () => {
  return (
    <div className="up-button">
      <div className="button">
        <MdOutlineKeyboardArrowUp />
      </div>
    </div>
  );
};

export default UpButton;
