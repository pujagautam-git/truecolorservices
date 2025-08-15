 import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import footerlogo from "../../assets/Home/logo.png"; // replace with your logo path
// import brushLogo from "../assets/brush-logo.png"; // replace with your brush image path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-col footer-about">
          <img src={footerlogo} alt="Dubai Painting Services" className="footer-logo" />
          <p>
            We at True colour Services are committed to providing the highest
            quality of painting services in your residential, commercial, or corporate buildings.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Important Links */}
        <div className="footer-col">
          <h3>Important Links</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col footer-contact">
          <h3>Contact</h3>
          <p>Michaeltruecolours@gmail.com</p>
          <p>0424652500</p>
          <p>unit 507 15 chatham road westryde</p>
          <img src={""} alt="Brush Logo" className="brush-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
