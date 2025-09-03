 import React from 'react'
 import {Link} from "react-router-dom";
 import commerc from "../../assets/services/commercial.webp";
 import comer1 from "../../assets/commercial/1com.png"
import comer2 from "../../assets/commercial/2com.png"
import comer3 from "../../assets/commercial/3com.png"
import comer4 from "../../assets/commercial/4com.png"
import comer5 from "../../assets/commercial/5com.png"
import comer6 from "../../assets/commercial/6com.png"
import pink from "../../assets/commercial/6com.png";
  import Testimonials from '../Testimonial/Testimonial';
import Quickpaint from "../Quickpaint/Quickpaint";
import ContactDetails from "../Contactdetails/ContactDetails";
 import "./Commercial.css";


 const Commercial = () => {

   const services = [
    {
      name: "Apartment Painting",
      desc: "Refresh your living space with smooth, even finishes perfect for high-rise living.",
      img: comer1 // replace with your splash icon
      
    },
    {
      name: "Office Painting",
      desc: "Create a professional workspace with fast-drying, low-odor commercial paints.",
      img: comer2
    
    },
    {
      name: "Building Painting",
      desc: "Full exterior and interior solutions for towers, maintained to Sydney standards.",
      img: comer3
      
    },
    {
      name: "Exterior Painting",
      desc: "Special UV-resistant coatings that fight sun damage and salt air corrosion.",
      img: comer4
      
    },
    {
      name: "Hotel Painting",
      desc: "Guest-ready finishes are applied during off-hours to avoid business disruption.",
      img: comer5
    },
    {
      name: "Shop Painting",
      desc: "Attract more customers with fresh, on-brand colors that withstand heavy foot traffic.",
      img:comer6
  
    }
  ];

   return (
    <>
     <section className="commercial-section">
      {/* Pink Wave at bottom right */}
      <div className="pink-wave"></div>

      {/* Pink Splash at top right */}
      <img src={pink} alt="Paint Splash" className="paint-splash" />

      {/* Content */}
      <div className="commercial-content">
        <h1>Commercial Painting Services</h1>
        <p>
          At TCS,we believe every commercial space in Sydney needs real protection against harsh UV rays, salt, and dust. That’s why we apply micro-thin shields with coatings that are 3X stronger, ensuring your interior and exterior surfaces stay pristine for longer. Whether it’s your home or your office, our skilled Emirati workmanship gives you the upper hand. We understand Australia climate challenges and are here to help your property stand strong. Get a free quote today and give your space the defence it deserves!
        </p>
      <Link to="/contact" ><button className="contact-btn">Contact Now</button></Link>
      </div>
    </section>
    <section className="business-section">
      <div className="business-container reverse">
        {/* Image on the left */}
        <div className="business-image">
          <img src={commerc} alt="Painting a business space" />
        </div>

        {/* Text on the right */}
        <div className="business-text">
          <h2>Why Painting is Important for Your Business</h2>
          <p>
            Your business space speaks before you do. First impressions count, and faded walls
            or surface damage can send the wrong signal. A professional paint job protects your
            property from Sydney intense sun, humid air, and frequent dust storms. From 
            offices to showrooms, we help businesses stay sharp, safe, and ready to make
            a lasting impression.
          </p>
        </div>
      </div>
    </section>
     <section className="commercial-card-section">
      <h2>Our Commercial Painting Services</h2>
      <p className="com-subtitle">
        As Sydney trusted commercial painting experts, we deliver durable,
        climate-ready solutions for every property type. Our certified painters
        apply long-lasting finishes for the harsh conditions, combining
        precision work with premium protective coatings.
      </p>
      
      <div className="com-service-grid">
        {services.map((service, index) => (
          < div key={index} className="com-service-card">
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
 
 export default Commercial