 import React from 'react'
  import { FaEnvelope,  FaMapMarkerAlt,FaPhoneAlt} from "react-icons/fa";
import "./ContactDetails.css";

 const ContactDetails = () => {
   return (
     <section className="contact-section">
          <div className="contact-box phone-box">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>042 465 2500</p>
            </div>
          </div>
    
          <div className="contact-box email-box">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>Michaeltruecolours@gmail.com</p>
            </div>
          </div>
    
          <div className="contact-box address-box">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>unit 507 15 chatham road westryde</p>
            </div>
          </div>
        </section>
   )
 }
 
 export default ContactDetails;