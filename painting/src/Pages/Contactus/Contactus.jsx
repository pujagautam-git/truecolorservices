  import React from 'react'
  import contactImg from "../../assets/contact/contact.png"
  import "./Contactus.css";
import Bookservice from '../../Components/Bookservice/Bookservice';
import ContactDetails from '../../Components/Contactdetails/ContactDetails';
  const Contactus = () => {
    return (
        <>
     <section className="contact-hero-wrapper">
  {/* Left Side - Text */}
  <div className="contact-hero-text">
    <h1 className="contact-title">Book Your Painting Service</h1>
    <p className="contact-description">
      We’re here to make your next painting project smooth and stress-free. 
      Whether you’re ready to get started or just have a few questions, 
      the TCS team is happy to help. Reach out to us for a free quote, 
      expert advice, or to schedule a visit, and we’ll get back to you quickly 
      and with the answers you need. Your time matters to us, and we aim to 
      respond within 24 hours or sooner.
    </p>
  </div>

  {/* Right Side - Image */}
  <div className="contact-hero-image">
    <img src={contactImg} alt="Contact Us" />
  </div>
</section>
<Bookservice/>
<ContactDetails/>
<section className="contact-map-section">
  <div className="map-container">
    <iframe
      title="Yes Business Tower Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.2677022105204!2d151.0852493755056!3d-33.80540407325094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a44e7636a749%3A0xb683d76fe283439a!2sUnit%20507%2F15%20Chatham%20Rd%2C%20West%20Ryde%20NSW%202114%2C%20Australia!5e0!3m2!1sen!2snp!4v1755250546286!5m2!1sen!2snp" 
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>
</>
    )
  }
  
  export default Contactus;