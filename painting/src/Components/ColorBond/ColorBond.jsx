 import React from 'react'
 import { Link } from "react-router-dom";
 import colorbond from "../../assets/services/colorbond.png";
  import Testimonials from '../Testimonial/Testimonial';
import Quickpaint from "../Quickpaint/Quickpaint";
import ContactDetails from "../Contactdetails/ContactDetails";
 import "./ColorBond.css";
 const ColorBond = () => {

    // const bondservices = [
    //     {
    //       name: "Wall cladding",
    //       desc: "Many modern homes use Colorbond for external walls.Refreshing keeps the exterior sleek, stylish, and well-protected.",
    //     //   img: ""
          
    //     },
    //     {
    //       name: "Fences & Gates Painting",
    //       desc: "Boundary fences often fade faster due to constant sun exposure.A refresh improves privacy fences, side gates, and garden enclosures.",
    //     //   img: ""
        
    //     },
    //     {
    //       name: "Roofs Painting",
    //       desc: "The most common place for a Colorbond Refresh.Restores faded, chalky, or peeling roofs to look brand new.Adds UV and weather protection to withstand Australia’s harsh sun and storms.",
    //     //   img:""
          
    //     },
    //     {
    //       name: "Garages, Carports & Sheds",
    //       desc: "Refresh restores faded sheds and garages, making them blend with the home.Great for farm sheds, storage units, or backyard workshops.",
    //     //   img:""
          
    //     },
    //     {
    //       name: "Gutters, Fascias & Downpipes",
    //       desc: "Small details that make a big difference to the look of your home.Refresh ensures gutters and trims match your updated roof or walls.",
    //     //   img:""
    //     },
    //     {
    //       name: "Pergolas, Patios & Outdoors",
    //       desc: "Outdoor living spaces face heavy sun and rain exposure.A refresh keeps pergolas and patios looking inviting and modern.",
    //     //   img:""
      
    //     }
    //   ];

   return (
    <>
    <section className="color-hero">
  <div className="color-wave-bg"></div>
  
  <div className="bond-content">
    <h1>ColorBond Refresh Services</h1>
    <p>
   Colorbond steel is durable and stylish, but over time exposure to sun, rain, dust, and pollution can make it look dull, faded, or chalky. A Colorbond Refresh service gives your roof, fence, or
    cladding a new lease on life without the cost of replacement.</p>
    <Link to="/contact" className="btn-bond">Contact Now</Link>
  </div>

  <div className="paint-splash-red"></div>
</section>
<section className="colorbond-section reverse">
  <div className="colorbond-image">
    <img src={colorbond} alt="colorbond Painting" />
  </div>
  <div className="colorbond-text">
    <h2>Why ColorBond is popular at Australia</h2>
    <p>
     Australia has intense sun, coastal salt air, heavy rains, and strong winds. Over time, Colorbond surfaces can fade, chalk, or corrode. A refresh service restores 
     the look and extends protection against these conditions.Colorbond is known for its iconic Australian colour palette (like Surfmist, Monument, Woodland Grey, etc.). Refreshing allows homeowners to 
     update to modern shades without changing the steel itself.
    </p>
  </div>
</section>
 {/* <section className="color-card-section">
      <h2>ColorBond Refresh Services</h2>
      <p className="color-subtitle">
       As Sydney’s trusted Colorbond refresh specialists, True Colour Services delivers durable, climate-ready solutions for every property. Our certified team restores faded or worn Colorbond surfaces with advanced coatings designed to 
       withstand Australia’s harsh UV rays, coastal air, and heavy rains.
      </p>
      
      <div className="color-service-grid">
        {bondservices.map((service, index) => (
          <div key={index} className="color-service-card">
            {/* <img src={service.img} alt={service.name} /> */}
            {/* <h3>{service.name}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>  */}
 <Testimonials/>
    <Quickpaint/>
     <ContactDetails/>
</>
   )
 }
 
 export default ColorBond