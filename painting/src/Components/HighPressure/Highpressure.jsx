import React from 'react'
import {Link} from "react-router-dom";   
 import Testimonials from '../Testimonial/Testimonial';
import Quickpaint from "../Quickpaint/Quickpaint";
import highpressure from "../../assets/services/highpressure.png";
import ContactDetails from "../Contactdetails/ContactDetails";
import "./Highpressure.css";
const Highpressure = () => {
  return (
    <>
   <section className="high-hero">
  <div className="high-wave-bg"></div>
  
  <div className="pressure-content">
    <h1>High Pressure Cleaning Services</h1>
    <p>
At True Colour Services, we provide professional high pressure cleaning to restore the fresh, clean look of your outdoor surfaces. Over time, driveways, patios, walls, fences, and decks can collect dirt, mould, mildew, algae, oil stains, and dust that regular cleaning simply can’t remove.</p>
   <Link to="/contact" className="btn-pressure">Contact Now</Link>
  </div>

  <div className="paint-splash-yellow"></div>
</section>
<section className="highpressure-section reverse">
  <div className="highpressure-image">
    <img src={highpressure} alt="highpressure Painting" />
  </div>
  <div className="highpressure-text">
    <h2>Why High Pressure Cleaning is Essential for Your Home</h2>
    <p>
Over time, outdoor areas like driveways, decks, patios, fences, and walls accumulate built-up grime, oil stains, moss, and mould that not only look unpleasant but can also make surfaces slippery and unsafe. High pressure cleaning is important because it restores the fresh look of your property, improves safety by removing slippery growth, and extends the life of your surfaces by preventing long-term damage. It also boosts your home’s curb appeal and value, making it an essential part of
 property maintenance in Australia’s tough climate.
    </p>
  </div>
</section>
 <Testimonials/>
    <Quickpaint/>
     <ContactDetails/>
     </>
  )
}

export default Highpressure