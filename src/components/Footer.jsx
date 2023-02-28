import React from "react";
//Style Import
import "../styles/footer.scss";
//React Icons Import
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icon-container container grid grid-cols-2 md:grid-cols-4">
        <div className="each-icon">
          <div className="footer-icon">
            <IoLocationOutline />
          </div>
          <div className="adress">New York 1584, St. Vincent</div>
        </div>
        <div className="each-icon">
          <div className="footer-icon">
            <AiOutlineMail />
          </div>
          <div className="adress">New York 1584, St. Vincent</div>
        </div>
        <div className="each-icon">
          <div className="footer-icon">
            <IoLocationOutline />
          </div>
          <div className="adress">New York 1584, St. Vincent</div>
        </div>
        <div className="each-icon">
          <div className="footer-icon">
            <IoLocationOutline />
          </div>
          <div className="adress">New York 1584, St. Vincent</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
