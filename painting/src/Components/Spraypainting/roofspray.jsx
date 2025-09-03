 import React from 'react'
 import {Link} from "react-router-dom"
 import roof from"../../assets/services/spray.png";
 import Testimonials from '../Testimonial/Testimonial';
import Quickpaint from "../Quickpaint/Quickpaint";
import ContactDetails from "../Contactdetails/ContactDetails";
import resid1 from "../../assets/residential/resid1.webp"
import resid2 from "../../assets/residential/resid2.webp"
import resid3 from "../../assets/residential/resid3.webp"
import resid4 from "../../assets/residential/resid4.webp"
import resid5 from "../../assets/residential/resid5.webp"
import resid6 from "../../assets/residential/resid6.webp"
import "./roofspray.css"

 
 const RoofSpray = () => {

const sprayservices = [
    {
      name: "Furniture Painting",
      desc: "Refresh your living space with smooth, even finishes perfect for high-rise living.",
      img: resid1 // replace with your splash icon
      
    },
    {
      name: "Walls Painting",
      desc: "Create a professional workspace with fast-drying, low-odor commercial paints.",
      img: resid2
    
    },
    {
      name: "Concrete Flooring",
      desc: "Full exterior and interior solutions for towers, maintained to Sydney standards.",
      img:resid3
      
    },
    {
      name: "Metal Structure",
      desc: "Special UV-resistant coatings that fight sun damage and salt air corrosion.",
      img:resid4
      
    },
    {
      name: "Industrial Equipment",
      desc: "Guest-ready finishes are applied during off-hours to avoid business disruption.",
      img:resid5
    },
    {
      name: "Vehicles Painting",
      desc: "Attract more customers with fresh, on-brand colors that withstand heavy foot traffic.",
      img:resid6
  
    }
  ];

   return (
    <>
 <section className="apartment-hero">
  <div className="wave-bg-color"></div>
  
  <div className="hero-content">
    <h1>Spray Painting Services</h1>
    <p>
    Bored of dull, patchy finishes? Try spray painting! It gives a very professional and smooth finish to walls, furniture, and industrial equipment. But achieving perfection requires skill, precision, and the right tools. That’s where we come in! We are a leading spray painting company in Sydney that uses advanced spray painting techniques to deliver a high-end finish. Whether you want to revamp your home’s walls & furniture, give your vehicle a flawless finish, or enhance the appearance of commercial equipment, our professional spray painting services deliver outstanding results every time. Let’s spray perfection together!
    </p>
    <Link to="/contact" className="btn-black">Contact Now</Link>
  </div>

  <div className="paint-splash-brown"></div>
</section>
<section className="apartment-section reverse">
  <div className="apartment-image">
    <img src={roof} alt="Apartment Painting" />
  </div>
  <div className="apartment-text">
    <h2>Why Roof Spraying is Important</h2>
    <p>
      Sydney roofs face constant exposure to harsh conditions—scorching UV rays, heavy rain, coastal winds, and urban pollution all contribute to fading, cracks, and damage. Standard paints simply don’t provide long-lasting protection. That’s why True Colour Services uses advanced roof spraying techniques with heat-reflective coatings, weather-resistant sealers, and protective finishes designed to withstand Sydney’s climate. Whether it’s a tiled, metal, or Colorbond roof, our professional roof spraying not only restores its appearance but also extends its lifespan, keeping your property fresh, 
      durable, and well-protected year-round.
    </p>
  </div>
</section>
{/* <section className="why-choose-us">
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
    </section> */}

    <section className="spray-card-section">
      <h2>Our Roof Spraying Painting Services</h2>
      <p className="spray-subtitle">
       As Sydney’s trusted roof spraying specialists, True Colour Services delivers durable, climate-ready solutions for every roof type. Our certified team applies high-performance coatings designed to withstand harsh UV rays, heavy rain, and coastal conditions—restoring your roof’s look while extending its lifespan. With precision workmanship and premium protective finishes, we keep your property
        strong, stylish, and weatherproof year-round.
      </p>
      
      <div className="spray-service-grid">
        {sprayservices.map((service, index) => (
          < div key={index} className="spray-service-card">
            <img src={service.img} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
 <Testimonials/>
    <Quickpaint/>
     <ContactDetails/>
</>
   )
 }
 
 export default RoofSpray