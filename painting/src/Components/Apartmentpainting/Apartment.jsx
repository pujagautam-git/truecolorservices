 import React from 'react'
 import Testimonials from '../../Components/Testimonial/Testimonial';
import Quickpaint from "../../Components/Quickpaint/Quickpaint";
import ContactDetails from "../../Components/Contactdetails/ContactDetails";
import equip1 from "../../assets/equip/equip1.webp";
import equip2 from "../../assets/equip/equip2.webp";
import equip3 from "../../assets/equip/equip3.webp";
import equip4 from "../../assets/equip/equip4.webp";
import equip5 from "../../assets/equip/equip5.webp";
import equip6 from "../../assets/equip/equip6.webp";
import apart from "../../assets/apart.png"
import "./Apartment.css"

 
 const Apartment = () => {
   return (
    <>
 <section class="apartment-hero">
  <div class="wave-bg"></div>
  
  <div class="hero-content">
    <h1>Apartment Painting Services</h1>
    <p>
      Your apartment’s walls face constant wear from Dubai’s heat, humidity, and frequent rental turnovers, so quality protection is essential. At DPS, we use eco-friendly, durable paints with advanced ceramic microsphere technology that reflects up to 92% of harmful UV rays while allowing walls to breathe. We provide expert apartment painting services across Dubai, delivering flawless finishes customized to renters and homeowners from cozy studios in Business Bay to spacious flats in Jumeirah Beach Residence, ensuring your space stays fresh, protected, and ready for whatever comes next.
    </p>
    <a href="#contact" class="btn-black">Contact Now</a>
  </div>

  <div class="paint-splash"></div>
</section>
<section className="apartment-section reverse">
  <div className="apartment-image">
    <img src={apart} alt="Apartment Painting" />
  </div>
  <div className="apartment-text">
    <h2>Why Apartment Walls Need Special Care</h2>
    <p>
      Dubai apartments take a toll on walls, as shower steam, balcony smoke, and harsh sunlight pouring
      through large windows all contribute to wear and tear. Regular paint just doesn’t hold up in these
      conditions. That’s why we use anti-mold primers in kitchens and baths, heat-reflective paints for
      sun-facing walls, and smoke-resistant coatings for balconies, plus landlord-approved colors to make
      handovers hassle-free. With DPS, your apartment stays looking fresh, protected, and move-out ready
      year-round.
    </p>
  </div>
</section>
<section className="why-choose-us">
      <div className="container">
        <h2>Why Choose DPS as Your Apartment Painting Contractor</h2>
        <p className="intro-text">
         We understand the specific needs of apartment dwellers in Dubai, 
         including tight schedules, limited access, and the need for 
         spotless clean-up. That’s why clients trust DPS for professional, hassle-free service.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-equip">
            <img src={equip1} alt='equip-image'/></div>
            <h3>Easy Booking</h3>
            <p>
              You can easily book us through our online form or by calling us. Select your slot and date, 
              and we will confirm via SMS/email.
            </p>
          </div>

          <div className="feature-card">
           <div className="feature-equip">
            <img src={equip2} alt='equip-image'/></div>
            <h3>Fixed Pricing</h3>
            <p>
              There will be no hidden charges. The amount we quote is what you pay. Enjoy transparent 
              pricing with no surprises.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-equip">
            <img src={equip3} alt='equip-image'/></div>
            <h3>Flexible Scheduling</h3>
            <p>
              We also provide painting services on weekends, evenings, or even holidays, so you won't 
              need to take time off for this.
            </p>
          </div>
        

        <div className="feature-card">
            <div className="feature-equip">
            <img src={equip4} alt='equip-image'/></div>
            <h3>Flexible Scheduling</h3>
            <p>
              We also provide painting services on weekends, evenings, or even holidays, so you won't 
              need to take time off for this.
            </p>
          </div>
        

        <div className="feature-card">
            <div className="feature-equip">
            <img src={equip5} alt='equip-image'/></div>
            <h3>Flexible Scheduling</h3>
            <p>
              We also provide painting services on weekends, evenings, or even holidays, so you won't 
              need to take time off for this.
            </p>
          </div>
        

        <div className="feature-card">
            <div className="feature-equip">
            <img src={equip6} alt='equip-image'/></div>
            <h3>Flexible Scheduling</h3>
            <p>
              We also provide painting services on weekends, evenings, or even holidays, so you won't 
              need to take time off for this.
            </p>
          </div>
        </div>
      </div>
    </section>
 <Testimonials/>
    <Quickpaint/>
     <ContactDetails/>
</>
   )
 }
 
 export default Apartment