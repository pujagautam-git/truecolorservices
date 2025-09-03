import React from 'react'
 import Testimonials from '../../Components/Testimonial/Testimonial';
 import apart from "../../assets/equip/equip6.webp";
import Quickpaint from "../../Components/Quickpaint/Quickpaint";
import ContactDetails from "../../Components/Contactdetails/ContactDetails";
import equip1 from "../../assets/equip/equip1.webp";
import equip2 from "../../assets/equip/equip2.webp";
import equip3 from "../../assets/equip/equip3.webp";
import equip4 from "../../assets/equip/equip4.webp";
import equip5 from "../../assets/equip/equip5.webp";
import equip6 from "../../assets/equip/equip6.webp";
import "./House.css"
const House = () => {

  const services = [
  {
    title: "Wall Painting",
    description:
      "Renew your walls with smooth, even finishes in your choice of colors and textures.",
    img: "/images/wall-paint.png", // replace with your image path
  },
  {
    title: "Interior Painting",
    description:
      "Improve your living spaces with expert painting that complements your décor and style.",
    img: "/images/interior-paint.png",
  },
  {
    title: "Furniture Painting",
    description:
      "Revamp old furniture with custom colors to match your décor seamlessly.",
    img: "/images/furniture-paint.png",
  },
  {
    title: "Door Painting",
    description:
      "Make a great first impression with perfectly painted doors that add charm & elegance.",
    img: "/images/door-paint.png",
  },
  {
    title: "Bedroom Painting",
    description:
      "Create a relaxing or vibrant atmosphere with personalized bedroom color schemes.",
    img: "/images/bedroom-paint.png",
  },
  {
    title: "Kitchen Cabinet Painting",
    description:
      "Give your kitchen a modern upgrade without the cost of full replacements.",
    img: "/images/kitchen-paint.png",
  },
];

  return (
    <>
    <section class="house-hero">
  <div class="wave-bg"></div>
  
  <div class="house-content">
    <h1>House Painting Services</h1>
    <p>
     Paint tells a story. Every home reflects the journey of those who live there, which is why our team treats your walls with care and respect. At TCS, we understand that quality and trust go hand in hand, so we use only top-grade materials and proven techniques to ensure lasting results. We believe that true beauty lies in the details, from clean edges to smooth finishes, leaving no corner overlooked. This approach not only enhances your space’s appearance but also protects surfaces from Sydney’s harsh weather, 
     ensuring your investment stands the test of time
    </p>
    <a href="#contact" class="btn-black">Contact Now</a>
  </div>

  <div class="black-paint-splash"></div>
</section>
<section className="apartment-section reverse">
  <div className="apartment-image">
    <img src={apart} alt="Apartment Painting" />
  </div>
  <div className="apartment-text">
    <h2>Why Apartment Walls Need Special Care</h2>
    <p>
      Sydney apartments take a toll on walls, as shower steam, balcony smoke, and harsh sunlight pouring
      through large windows all contribute to wear and tear. Regular paint just doesn’t hold up in these
      conditions. That’s why we use anti-mold primers in kitchens and baths, heat-reflective paints for
      sun-facing walls, and smoke-resistant coatings for balconies, plus landlord-approved colors to make
      handovers hassle-free. With DPS, your apartment stays looking fresh, protected, and move-out ready
      year-round.
    </p>
  </div>
</section>
 <section className="house-section">
      <h2 className="house-title">Our Services</h2>
      <p className="house-subtitle">
        We offer a wide variety of professional painting options to perfectly suit every corner of your home:
      </p>
      <div className="house-grid">
        {services.map((service, index) => (
          <div className="house-card" key={index}>
            <img src={service.img} alt={service.title} className="house-icon" />
            <h3 className="house-heading">{service.title}</h3>
            <p className="house-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
<section className="why-choose-us">
      <div className="container">
        <h2>Why Choose True Colour Services as Your Apartment Painting Contractor</h2>
        <p className="intro-text">
         We understand the specific needs of apartment dwellers in Sydney, 
         including tight schedules, limited access, and the need for 
         spotless clean-up. That’s why clients trust TCS for professional, hassle-free service.
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
            <h3>Fast Completion</h3>
            <p>
             Most painting jobs are done in 1-3 days with no compromise on quality. 
             We always strive to deliver on schedule.
            </p>
          </div>
        

        <div className="feature-card">
            <div className="feature-equip">
            <img src={equip5} alt='equip-image'/></div>
            <h3>Eco-friendly Paints</h3>
            <p>
             Keep your place healthy because we use low-VOC, odorless paints that are safe for kids,
              pets, and the environment.
            </p>
          </div>
        

        <div className="feature-card">
            <div className="feature-equip">
            <img src={equip6} alt='equip-image'/></div>
            <h3>Fast Communication</h3>
            <p>
             We pick up the phone, reply to messages, and keep you updated throughout
              the painting process, always.
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

export default House