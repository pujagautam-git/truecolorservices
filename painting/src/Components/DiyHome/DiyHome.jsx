import React from 'react'
import diyhome from"../../assets/services/Diyhome.webp";
  import Testimonials from '../Testimonial/Testimonial';
import Quickpaint from "../Quickpaint/Quickpaint";
import ContactDetails from "../Contactdetails/ContactDetails";
import {Link} from "react-router-dom";
import "./DiyHome.css";
const DiyHome = () => {
  return (
    <>
    <section className="diyhome-hero">
  <div className="diyhome-wave-bg"></div>
  
  <div className="diy-content">
    <h1>Diy Home Renovation Services</h1>
    <p>
   DIY (Do-It-Yourself) home renovation means improving, repairing, or updating your home by yourself, without hiring 
   professional tradespeople for every task. It can range from small upgrades like painting a wall,
    to bigger projects like building furniture, tiling, or even remodeling a room.</p>
    <Link to="/contact" className="btn-diy">Contact Now</Link>
  </div>

  <div className="paint-splash-purple"></div>
</section>
<section className="diyhome-section reverse">
  <div className="diyhome-image">
    <img src={diyhome} alt="diyhome Painting" />
  </div>
  <div className="diyhome-text">
    <h2>Why Australian People Need Diy Home Renovation</h2>
    <p>
     Australia has intense sun, coastal salt air, heavy rains, and strong winds. Over time, Colorbond surfaces can fade, chalk, or corrode. A refresh service restores 
     the look and extends protection against these conditions.Colorbond is known for its iconic Australian colour palette (like Surfmist, Monument, Woodland Grey, etc.). Refreshing allows homeowners to 
     update to modern shades without changing the steel itself.Australians choose DIY renovations as a cost-effective way to improve their homes without spending thousands on contractors.ustralians love
      outdoor living — patios, pergolas, BBQ areas, and gardens. DIY renovation allows homeowners to customise outdoor spaces to suit the climate and lifestyle.
    </p>
  </div>
</section>
 <Testimonials/>
    <Quickpaint/>
     <ContactDetails/>
</>
  )
}

export default DiyHome