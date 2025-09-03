 import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import brush from "../../assets/brush.png";
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
            <a href="https://www.facebook.com/profile.php?id=61555938118993"><FaFacebookF /></a>
            <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
           <a href="https://www.instagram.com/truecolourservices/"><FaInstagram /></a>
          </div>
        </div>

        {/* Important Links */}
        <div className="footer-col">
          <h3>Important Links</h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Our Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col footer-contact">
          <h3>Contact</h3>
          <p>
              <FaEnvelope className="footer-icon" /> Michaeltruecolours@gmail.com</p>
          <p>
              <FaPhoneAlt className="footer-icon" /> +61 424 652 500</p>
          <p>
             <FaMapMarkerAlt className="footer-icon" /> Unit 507, 15 chatham Road <br/>
             West Ryde NSW 2114 
             <br/>Sydney, Australia</p>
          <img src={brush} alt="Brush Logo" className="brush-logo" />
        </div>
      </div>

      
      {/* Footer Bottom / Copyright */}
      <div className="footer-bottom">
        <p>© 2025  <a href="https://www.deskgoo.com/" target="_blank" rel="noopener noreferrer"><span>Deskgoo</span> </a>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
