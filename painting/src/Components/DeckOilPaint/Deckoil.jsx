import React from 'react'
 import Testimonials from '../Testimonial/Testimonial';
import Quickpaint from "../Quickpaint/Quickpaint";
import ContactDetails from "../Contactdetails/ContactDetails";
import deckoil from "../../assets/services/deck.jpg";
import {Link} from "react-router-dom";
import "./Deckoil.css"

const Deckoil = () => {
  return (
    <>
   <section className="deck-hero">
  <div className="deck-wave-bg"></div>
  
  <div className="oil-content">
    <h1>Deck Oil Services</h1>
    <p>
  Deck oil painting is the process of treating and finishing wooden decks with a specially formulated deck oil. Unlike paint, deck oils soak into the wood instead of just sitting on top, enhancing
   the wood’s natural grain while protecting it from the elements.</p>
    <Link to="/contact" className="btn-oil">Contact Now</Link>
  </div>

  <div className="paint-splash-darkblue"></div>
</section>
<section className="deckoil-section reverse">
  <div className="deckoil-image">
    <img src={deckoil} alt="deckoil Painting" />
  </div>
  <div className="deckoil-text">
    <h2>Why Deck Oil Matters and How It Works</h2>
    <p>
    Deck oil painting is an essential part of maintaining any outdoor timber deck. Unlike paint that sits on top of the surface, deck oil penetrates deep into the timber, nourishing the wood from within. It is used because it protects against Australia’s harsh sun, heavy rains, and constant weather changes that can cause timber to fade, crack, or warp. By creating a barrier against moisture, deck oil helps prevent mould, rot, and swelling,
     while its UV protection slows down fading and sun damage.
    </p>
  </div>
</section>
 <Testimonials/>
    <Quickpaint/>
     <ContactDetails/>
     </>
  )
}

export default Deckoil