import React from 'react'
import {Link} from "react-router-dom";
import resident from "../../assets/services/residential.jpg";
import resi1 from "../../assets/residential/1res.png";
import resi2 from "../../assets/residential/2res.png";
import resi3 from "../../assets/residential/3res.png";
import resi4 from "../../assets/residential/4res.png";
import resi5 from "../../assets/residential/5res.png";
import resi6 from "../../assets/residential/6res.png";
import green from "../../assets/commercial/3com.png";
  import Testimonials from '../Testimonial/Testimonial';
import Quickpaint from "../Quickpaint/Quickpaint";
import ContactDetails from "../Contactdetails/ContactDetails";
import "./Residential.css"
const Residential = () => {

  const resservices = [
      {
        name: "House Painting",
        desc: "Full-property protection from foundation to roof with UV-reflective exterior coatings and breathable interior paints.",
        img: resi1 // replace with your splash icon
        
      },
      {
        name: "Wall Painting",
        desc: "Flawless finishes with scrubbable, stain-resistant paints that withstand the wear and tear from kids, pets, and dust.",
        img: resi2
      
      },
      {
        name: "Interior Painting",
        desc: "Low-odor, fast-drying formulas applied during daytime hours to minimize disruption while revitalizing your home’s interiors.",
        img: resi3
        
      },
      {
        name: "Furniture Painting",
        desc: "Non-toxic paint options for rejuvenating cabinets, tables, and accent pieces, safe for indoor and outdoor use.",
        img: resi4
        
      },
      {
        name: "Kitchen Painting",
        desc: "Grease-proof, heat-resistant coatings that transform your kitchen without the need for costly replacements.",
        img: resi5
      },
      {
        name: "Garage Painting",
        desc: "Dust-resistant semi-gloss finishes for walls and anti-slip epoxy coatings for floors, making your garage functional & stylish.",
        img:resi6
    
      }
    ];
  


  return (
    <>
    <section className="residential-section">
      {/* Pink Wave at bottom right */}
      <div className="blue-wave"></div>

      {/* Pink Splash at top right */}
      <img src={green} alt="Paint Splash" className="blue-splash" />

      {/* Content */}
      <div className="residential-content">
        <h1>Residential Painting Services</h1>
        <p>
        At Tcs, we understand that your home is your sanctuary. Whether it’s a residential house painting project or a complete makeover of your apartment, we turn houses into homes with durable, climate-ready paints designed for Sydney harsh sun, humidity, and sand. From refinishing your apartment in Sydney to protecting your villa our painting services combine European-quality materials with local expertise. Let us
         paint your living space with lasting, high-quality results.
        </p>
       <Link to="/contact"> <button className="contact-btn-value">Contact Now</button></Link>
      </div>
    </section>
    <section className="house-section">
      <div className="house-container reverse">
        {/* Image on the left */}
        <div className="house-image">
          <img src={resident} alt="Painting a business space" />
        </div>

        {/* Text on the right */}
        <div className="house-text">
          <h2>Why Painting is Important for Your Home</h2>
          <p>
            Your home’s appearance reflects your lifestyle and care. Faded or 
            peeling paint can lower your property’s value and leave surfaces exposed to Sydney’s changing weather—from strong UV rays to heavy rain and coastal air. True Colour Services provides professional painting solutions that not only refresh your home’s look but also create a protective shield against the elements. Whether it’s a modern apartment, a family home, or a coastal property, a fresh coat of paint from True Colour 
            Services can make a world of difference.
          </p>
        </div>
      </div>
    </section>
     <section className="residential-card-section">
      <h2>Our Residential Painting Services</h2>
      <p className="res-subtitle">
        At TCS, we provide expert residential home painting services tailored to the needs of your home. From exterior coatings to detailed interior touch-ups, our services
         are designed to protect and beautify your living space.
      </p>
       
      <div className="res-service-grid">
        {resservices.map((service, index) => (
          < div key={index} className="res-service-card">
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

export default Residential