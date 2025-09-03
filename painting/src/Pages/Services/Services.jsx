 import React, { useEffect } from "react";
 import {Link} from "react-router-dom";
import Quickpaint from "../../Components/Quickpaint/Quickpaint";
import ContactDetails from "../../Components/Contactdetails/ContactDetails";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    const intro = document.querySelector(".intro");
    const cards = document.querySelectorAll(".service-card");

    const options = { threshold: 0.2 };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (intro) revealOnScroll.observe(intro);
    cards.forEach((card) => revealOnScroll.observe(card));

    return () => revealOnScroll.disconnect();
  }, []);

  return (
    <>
    <section id="services" className="services">
      {/* Intro Section */}
      <div className="intro">
        <h2>Bringing Color & Life to Your Property</h2>
        <p>
        At True Colour Services, we bring your walls, roofs, and interiors to life with professional painting solutions. From commercial and residential painting to specialized services like roof spraying, deck finishes, and wood staining, our expert team ensures
         a flawless, long-lasting finish every time.
        </p>
      </div>

      {/* Service Cards */}
      <div className="service-grid">
            <Link to="/residential"><div className="service-card">
          {/* <i className="fas fa-th-large icon"></i> */}
          <h3>Residential Painting</h3>
          <p>From bedrooms and living rooms to kitchens and exteriors,
             we transform your house into a home you’ll love.</p>
        </div></Link>

        <Link to="/roofspraying"><div className="service-card">
          {/* <i className="fas fa-cogs icon"></i> */}
          <h3>Roof Spraying and Transformation</h3>
          <p>Using specialized spraying techniques, we seal and protect your roof from leaks, 
            cracks, and harsh weather conditions..</p>
        </div></Link>

      <Link to="/highpressureclean"> <div className="service-card">
          {/* <i className="fas fa-search icon"></i> */}
          <h3>High Pressure Cleaning</h3>
          <p>High Pressure Cleaning removes dirt, grime, mold, 
            and stains from surfaces quickly and effectively.
          </p>
        </div></Link>

          <Link to="/deckoil"><div className="service-card">
          {/* <i className="fas fa-cog icon"></i> */}
          <h3>Deck oil painting</h3>
          <p>Provides a smooth, slip-resistant surface while preserving the natural texture and grain of your deck.</p>
        </div></Link>

      <Link to="/colorbond"><div className="service-card">
          {/* <i className="fas fa-shopping-cart icon"></i> */}
          <h3>Colorbond Refresh</h3>
          <p>Our expert process enhances UV protection, rust 
            resistance, and overall roof durability.</p>
        </div></Link>

       <Link to="/diyhome"><div className="service-card">
          {/* <i className="fas fa-mobile-alt icon"></i> */}
          <h3>Diy Home Renovation</h3>
          <p>Using cost-effective methods, you can add value, style, and personality to your home.</p>
        </div></Link>
       
         <Link to ="/commercial"><div className="service-card">
          {/* <i className="fas fa-laptop-code icon"></i> */}
          <h3>Commercial Painting</h3>
          <p>Enhances the professional look of your business space with
             durable finishes designed to withstand heavy use.</p>
        </div> </Link>

   
       <Link to="/woodstain"><div className="service-card">
          {/* <i className="fas fa-search icon"></i> */}
          <h3>Wood stain and varnish</h3>
          <p>Our premium stains highlight the grain and texture of the wood, 
            giving a rich, elegant finish.
          </p>
        </div></Link>

     
         <Link to="/specialfinish"> <div className="service-card">
          {/* <i className="fas fa-search icon"></i> */}
          <h3>Special Finishes</h3>
          <p>We go beyond standard painting and give walls or 
            surfaces a unique look or texture.
          </p>
        </div></Link>
        
      </div>
    </section>
     <Quickpaint/>
     <ContactDetails/>
     </>
  );
};

export default Services;
