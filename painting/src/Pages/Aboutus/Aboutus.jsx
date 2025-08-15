 import React from "react";
import "./Aboutus.css";
import { Link } from "react-router-dom";
import aboutsite1 from "../../assets/About/about1.png";
import splashImg from "../../assets/About/aboutback1.png";
import splashImg2 from "../../assets/About/aboutback2.png";
import visionImg from "../../assets/About/about5.png";
import sectionImg from "../../assets/About/about2.png";
import ContactDetails from "../../Components/Contactdetails/ContactDetails";

const About = () => {
  return (
    <>
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At TSC, we understand that every space deserves a clean, lasting
            finish done with care. Our team delivers high-quality painting
            services with attention to detail, clear communication, and respect
            for your time and property.
          </p>
          <p>
            Whether it’s a single room or an entire building, we approach each
            project with the same level of precision and commitment. We use
            trusted materials, skilled techniques, and never cut corners. With
            honest pricing and friendly service, we make sure you feel confident
            from start to finish.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutsite1} alt="Painting service" />
        </div>
      </div>
    </section>


     <section className="vision-section-wrapper">
       
      {/* Left Side */}
      <div className="vision-left-value">
        <img src={splashImg} alt="paint splash" className="paint-splash-value" />
        <h3 className="vision-title-value">
          <span className="vision-number">01:</span> <b>Vision</b>
        </h3>
        <p className="vision-text">
          We aim to become one of Sydney most trusted painting companies,
          known not just for quality, but for dependability. We see every
          project as a step toward raising the standard for service and lasting
          value. Our vision is to build long-term trust through clear work,
          strong ethics, and professional pride.
        </p>
      </div>
      

      {/* Right Side */}
      <div className="vision-right-value">
        <img src={visionImg} alt="Vision" />
      </div>
    
    </section>

    <section className="about-section-bg">
      {/* Background content */}
      <div className="bg-image">
        <img src={sectionImg} alt="Section" />
      </div>

      {/* Text side */}
      <div className="text-side">
        <img src={splashImg2} alt="Paint Splash" className="paint-splash" />
        <h3 className="title">
          <span className="section-number">02:</span> <b>Mission</b>
        </h3>
        <p className="description">
          We deliver expert painting services designed for busy clients who
          value quality and clear results. Our team works on schedule, with
          clean methods and open communication from start to finish. We focus on
          doing the job right, respecting your space, time, and expectations
          every step of the way.
        </p>
      </div>
    </section>
   
    <section className="quick-section">
      <div className="quick-container">
        <div className="content-wrapper-value">
          <h2>Let’s Talk About Your Next Project</h2>
          <p className="quick-description">
Ready to refresh your space with clean, professional painting? Contact True Colour Service Painting for a free quote and expert advice. We’re here to help on time, on budget, and with no stress.
          </p>
        <Link to ="/contact"
    // window.location.hostname === "localhost"
    //   ? "/contact"
    //   : "https://tc.deskgoo.com/contact"
   >
   <button  className="gfc-button">Contact Now</button></Link>
        </div>
      </div>
    </section>
    <ContactDetails/>
    </>
  );
};

export default About;
