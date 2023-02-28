import React from "react";
//Style Import
import "../styles/footer.scss";
//React Icons Import
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaFax, FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { RiPinterestFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

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
          <div className="adress">
            <a href="mailto:contact@architenecxt.com">
              contact@architenecxt.com
            </a>
          </div>
        </div>
        <div className="each-icon">
          <div className="footer-icon">
            <HiOutlineDevicePhoneMobile />
          </div>
          <div className="adress">
            <a href="tel:+18004506024">+1 800 450 6024</a>
          </div>
        </div>
        <div className="each-icon">
          <div className="footer-icon">
            <FaFax />
          </div>
          <div className="adress">
            <a href="tel:+18004506024">+1 800 745 6024</a>
          </div>
        </div>
      </div>

      <div className="logos">
        <div className="each-logos">
          <FaFacebookF />
        </div>
        <div className="each-logos">
          <FaTwitter />
        </div>
        <div className="each-logos">
          <RiPinterestFill />
        </div>
        <div className="each-logos">
          <FaGooglePlusG />
        </div>
      </div>
      <div className="up-button">
        <div className="button">
          <MdOutlineKeyboardArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
