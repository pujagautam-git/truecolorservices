import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/Home/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="top-row">
          {/* Left: Logo */}
          <div className="nav-left">
            <Link to="/">
              <img src={logo} alt="Logo" className="nav-logo" />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className={`nav-center ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/" className="nav-button"  onClick={() => setIsMenuOpen(false)}>HOME</Link>
              </li>

              {/* OUR SERVICES with dropdown */}
              <li>
                <Link to="/service" className="nav-button"  onClick={() => setIsMenuOpen(false)}>
                  OUR SERVICES </Link>
                  </li>
              <li>
                <Link to="/about" className="nav-button" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
              </li>
              {/* <li>
                <Link to="/blog" className="nav-button">BLOG</Link>
              </li> */}
              <li>
                <Link to="/contact" className="nav-button" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
              </li>
              {/* Mobile-only CALL US button */}
              <li className="mobile-call">
                <a href="tel:+61424652500">
                  <button className="nav-btn callus" >
                    CALL US: 042 465 2500
                  </button>
                </a>
              </li>

              <li className="mobile-whatsapp">
  <a
    href="https://wa.me/+61424652500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="nav-btn whatsapp-btn">
      <FaWhatsapp className="whatsapp-icon" /> WhatsApp
    </button>
  </a>
</li>
            </ul>
          </div>

          {/* Right: Call button + Hamburger */}
          <div className="nav-right">
             <div className="contact-actions">
            <a href="tel:+61424652500" className="desktop-call">
              <button className="nav-btn callus">CALL US: 042 465 2500</button>
            </a>
            
               <a
      href="https://wa.me/+61424652500"
      target="_blank"
      rel="noopener noreferrer"
      className="desktop-whatsapp"
    >
      <button className="nav-btn whatsapp-btn">
        <FaWhatsapp className="whatsapp-icon" /> 
      </button>
    </a>
  </div>
            <button className="hamburger" onClick={toggleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
