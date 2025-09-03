 import React from 'react'
import specialhome from"../../assets/services/special.png";
  import Testimonials from '../Testimonial/Testimonial';
import Quickpaint from "../Quickpaint/Quickpaint";
import ContactDetails from "../Contactdetails/ContactDetails";
import {Link} from "react-router-dom";
import "./Specialfinish.css";

const Specialfinish = () => {
  return (
    <>
    <section className="specialhome-hero">
  <div className="specialhome-wave-bg"></div>
  
  <div className="special-content">
    <h1>Special Finishes</h1>
    <p>
  Elevate your interiors with our Special Finishes painting services. 
  From textured walls and metallic sheens to faux marble, wood effects, and Venetian plaster, we create unique surfaces that reflect your style. Our expert team combines creativity and precision to deliver sophisticated, one-of-a-kind finishes
   that transform ordinary walls into extraordinary features.</p>
    <Link to="/contact" className="btn-special">Contact Now</Link>
  </div>

  <div className="paint-splash-blue"></div>
</section>
<section className="specialhome-section reverse">
  <div className="specialhome-image">
    <img src={specialhome} alt="specialhome Painting" />
  </div>
  <div className="specialhome-text">
    <h2>Our Expertise in Exceptional Finishes</h2>
    <p>
    At Truecolour Services, based in Sydney, we specialize in delivering exceptional special finishes that transform any space into a work of art. With years of experience in residential, commercial, and corporate projects, our team combines skill, precision, and creativity to ensure every surface is flawlessly finished. Our clients consistently praise our attention to detail, professionalism, and dedication to exceeding expectations. Whether it’s unique textures, high-end coatings, or bespoke finishing touches, Truecolour Services is committed to providing superior results that leave a lasting impression, earning 
    trust and glowing reviews from our satisfied customers across Sydney.
    </p>
  </div>
</section>
 <Testimonials/>
    <Quickpaint/>
     <ContactDetails/>
</>
  )
}

export default Specialfinish