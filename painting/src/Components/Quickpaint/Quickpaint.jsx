 import React from 'react';
 import { Link } from "react-router-dom";
import './Quickpaint.css';

const Quickpaint = () => {
  return (
    <section className="quick-paint-section">
      <div className="container">
        <div className="content-wrapper">
          <h2>Need a Quick Paint Job? Contact Us Today</h2>
          <p className="description">
            No delays. No hassle. Our expert team is ready to deliver fast, high-quality painting services in Australia whenever you need them. Get in touch, consult, and book the service according to your schedule.
          </p>
        <Link to ="/contact"
    // window.location.hostname === "localhost"
    //   ? "/contact"
    //   : "https://tc.deskgoo.com/contact"
   >  <button className="cta-button">GET FREE CONSULTATION</button> </Link>
        </div>
      </div>
    </section>
  );
};

export default Quickpaint;