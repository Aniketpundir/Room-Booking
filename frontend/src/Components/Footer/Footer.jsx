import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png"
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FiPhoneOutgoing } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";



const Footer = () => {
  return <>
    <div className="footer">
      <div className="footer-right">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <p>Find Your Dream <br /> Accommodation</p>
        <div className="footer-icon">
          <span><FaInstagram /></span>
          <span><CiFacebook /></span>
        </div>
      </div>
      <div className="Navigation">
        <h3>NAVIGATION</h3>
        <p>About Us</p>
        <p>FAQ</p>
      </div>
      <div className="Tenants">
        <h3>TENANTS</h3>
        <p>Housing Guide</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="connect">
        <h3>Contect</h3>
        <p><span><IoLocationOutline /></span> 117, Bannagar, Muzaffarnagar, Uttar Pradesh(251001)</p>
        <p><span><FiPhoneOutgoing /> +91 9528745292</span></p>
        <p><span><MdOutlineMailOutline />aniketpundir348@gmail.com</span></p>
      </div>
    </div>
  </>;
};

export default Footer;
