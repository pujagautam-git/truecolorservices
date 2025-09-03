import React from 'react'
import {Link} from "react-router-dom";   
 import Testimonials from '../Testimonial/Testimonial';
import Quickpaint from "../Quickpaint/Quickpaint";
// import blue from "../../assets/blue.png";
import wood from "../../assets/services/wood.webp";
import ContactDetails from "../Contactdetails/ContactDetails";
import "./Woodstain.css";

const Woodstain = () => {
  return (
  <>
   <section className="wood-hero">
  <div className="wood-wave-bg"></div>
  
  <div className="stain-content">
    <h1>Wood Stain Services</h1>
    <p>
Wood stain is a type of finish applied to timber that changes or enhances its natural colour while still allowing the grain to show through. Unlike paint, which covers the surface with a solid layer, stain penetrates into the wood fibres, highlighting the natural beauty of the timber.</p>
    <Link to="/contact" className="btn-stain">Contact Now</Link>
  </div>

  <div className="paint-splash-blue"></div>
</section>
<section className="woodstain-section reverse">
  <div className="woodstain-image">
    <img src={wood} alt="woodstain Painting" />
  </div>
  <div className="woodstain-text">
    <h2>Wood Stain Painting: Rich Colour, Lasting Protection</h2>
    <p>
   At True Colour Services, we provide expert wood stain 
   painting to bring out the natural beauty of timber while protecting it from Australia’s harsh climate. Wood stain is different from regular paint — instead of just sitting on the surface, it penetrates deep into the wood fibres, highlighting the grain and giving timber a rich, elegant finish. Whether it’s decking, fences, doors, furniture, or interior timber features, our wood stain painting service restores warmth, colour, and durability to your wood surfaces.
    </p>
  </div>
</section>
 <Testimonials/>
    <Quickpaint/>
     <ContactDetails/>
     </>
  )
}

export default Woodstain