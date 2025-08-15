import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/Home/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

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
              <li
                className="dropdown"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
                style={{ position: "relative" }}
              >
                <span className="nav-button">
                  OUR SERVICES <FaChevronDown className="dropdown-icon" />
                </span>

                {showServices && (
                 
                     <div className="services-dropdown-full">
  <div className="services-inner">
    {/* Commercial */}
    <div className="services-column">
      <h4>Commercial Painting</h4>
      <ul>
    <li> <Link to ="/apartment"
    // window.location.hostname === "localhost"
    //   ? "/apartment"
    //   : "https://tc.deskgoo.com/apartment"
   >Apartment Painting</Link></li>
        <li> <a href="/office">Office Painting </a></li>
        <li>Building Painting</li>
        <li>Exterior Painting</li>
        <li>Hotel Painting</li>
        <li>Parking Lot Painting</li>
      </ul>
    </div>
    <div className="services-column">
      <ul>
        <li>Shop Painting</li>
        <li>Move Out Painting</li>
        <li>Spray Painting</li>
        <li>Industrial Painting</li>
        <li>Warehouse Painting</li>
      </ul>
    </div>

    {/* Residential */}
    <div className="services-column">
      <h4>Residential Painting</h4>
      <ul>
        <li><Link to="/house"
    // window.location.hostname === "localhost"
    //   ? "/house"
    //   : "https://tc.deskgoo.com/house"
   >House Painting </Link></li>
        <li>Wall Painting</li>
        <li>Interior Painting</li>
        <li>Epoxy Floor Painting</li>
        <li>Furniture Painting</li>
        <li>Door Painting</li>
      </ul>
    </div>
    <div className="services-column">
      <ul>
        <li>Room Painting</li>
        <li>Bedroom Painting</li>
        <li>Kitchen Cabinet Painting</li>
        <li>Garage Painting</li>
        <li>Fence Painting</li>
        <li>Villa Painting</li>
      </ul>
    </div>

    {/* Image */}
    <div className="services-column image-column">
      <img src="your-image.jpg" alt="Services" />
    </div>
  </div>
</div>
                  
     )}
              </li>

              <li>
                <Link to="/about" className="nav-button">ABOUT US</Link>
              </li>
              <li>
                <Link to="/blog" className="nav-button">BLOG</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-button">CONTACT</Link>
              </li>
            </ul>
          </div>

          {/* Right: Call button + Hamburger */}
          <div className="nav-right">
            <Link to="/callus">
              <button className="nav-btn callus">CALL US: 042 465 2500</button>
            </Link>
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
