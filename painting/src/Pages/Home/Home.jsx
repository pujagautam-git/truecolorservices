 import React,{useState,useEffect} from 'react'
 import { Link } from "react-router-dom";
 import { FaHammer } from "react-icons/fa"; // Hipages-style icon (hammer as brand
 import { FaEnvelope,  FaMapMarkerAlt,FaPhoneAlt} from "react-icons/fa";
// import googleLogo from "./google-logo.png"; 
import { FcGoogle } from "react-icons/fc";
import Services from '../Services/Services';
 import afford from "../../assets/Home/afrod.png"
import comer1 from "../../assets/commercial/1com.png"
import comer2 from "../../assets/commercial/2com.png"
import comer3 from "../../assets/commercial/3com.png"
import comer4 from "../../assets/commercial/4com.png"
import comer5 from "../../assets/commercial/5com.png"
import comer6 from "../../assets/commercial/6com.png"
import resid1 from "../../assets/residential/1res.png"
import resid2 from "../../assets/residential/2res.png"
import resid3 from "../../assets/residential/3res.png"
import resid4 from "../../assets/residential/4res.png"
import resid5 from "../../assets/residential/5res.png";
import resid6 from "../../assets/residential/6res.png"
import paintBg from "../../assets/Home/paintback.webp";
import painter1 from "../../assets/painterset/painter1.png";
import painter2 from "../../assets/painterset/painter2.png";
import painter3 from "../../assets/painterset/painter3.png";
import painter4 from "../../assets/painterset/painter4.png";
import painter5 from "../../assets/painterset/painter5.png";
import painter6 from "../../assets/painterset/painter6.png";
import equip1 from "../../assets/equip/equip4.png";
import equip2 from "../../assets/equip/equip2.png";
import equip3 from "../../assets/equip/equip3.png";
import equip4 from "../../assets/equip/equip1.png";
import equip5 from "../../assets/equip/equip5.png";
import equip6 from "../../assets/equip/equip6.png";
import Testimonials from '../../Components/Testimonial/Testimonial';
import Quickpaint from "../../Components/Quickpaint/Quickpaint";
import Bookservice from "../../Components/Bookservice/Bookservice";
import ContactDetails from "../../Components/Contactdetails/ContactDetails";
import HipagesReviews from '../../Components/hipage/hipage';
import "./Home.css";

 
 const Home = () => {

  useEffect(() => {
  const bg = document.querySelector(".process-bg");
  if(!bg) return;

  const handleScroll = () => {
    let offset = window.scrollY * 0.3;
    bg.style.backgroundPosition = `center calc (50% + ${offset}px))`;
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

 
      const [activeTab, setActiveTab] = useState("commercial");

       const commercialServices = [
    {
      img: comer1,
      title: "Office Painting",
      desc: "We provide office painting services that keep your workspace fresh, clean, and protected with durable finishes."
    },
    {
      img: comer2,
      title: "Exterior Painting",
      desc: "Our exterior painting protects your building from the elements while improving its curb appeal."
    },
    {
      img: comer3,
      title: "Building Painting",
      desc: "Our building painting services offer reliable protection against the weather, keeping your property in excellent condition."
    },
    {
      img: comer4,
      title: "Hotel Painting",
      desc: "We deliver hotel painting solutions designed to maintain a polished, welcoming look that lasts over time."
    },
    {
      img: comer5,
      title: "Warehouse Design",
      desc: "We offer warehouse painting that improves durability and safety while keeping your facility neat and functional."
    },
    {
      img: comer6,
      title: "Spray Painting",
      desc: "Flawless, even coverage for complex surfaces, detailed work, and smooth finishes."
    }
  ];

  const residentialServices = [
    {
      img: resid1,
      title: "Interior Painting",
      desc: "Enhance your home interiors with beautiful, long-lasting paint finishes tailored to your style."
    },
    {
      img: resid2,
      title: "Exterior Home Painting",
      desc: "Protect and beautify your home’s exterior with weather-resistant, vibrant coatings."
    },
    {
      img: resid3,
      title: "Fence & Gate Painting",
      desc: "Keep your fences and gates looking fresh and protected from the elements."
    },
    {
      img:resid4,
      title: "Bedroom Painting",
      desc: "Create a relaxing and stylish atmosphere in your bedrooms with premium paints."
    },
    {
      img: resid5,
      title: "Living Room Painting",
      desc: "Transform your living room with warm, inviting colors that reflect your personality."
    },
    {
      img: resid6,
      title: "Kitchen Painting",
      desc: "Brighten and refresh your kitchen with clean, durable paint finishes."
    }
  ];
  const steps = [
  {
    title: "Consultation & Quote",
    desc: "Free on-site assessment with a detailed, fixed-price estimate."
  },
  {
    title: "Surface Inspection",
    desc: "We identify cracks, stains, and imperfections for flawless results."
  },
  {
    title: "Surface Preparation",
    desc: "Furniture protection, repairs, and priming for maximum paint adhesion."
  },
  {
    title: "Painting",
    desc: "Precision application with premium paints for smooth, even coverage."
  },
  {
    title: "Final Touches",
    desc: "Quality inspection, touch-ups, and spotless cleanup before handover."
  }
];
const cards = [
  {
    title: "Sydney-Trained",
    desc: "Our painters in Australia train 200+ hours in specific techniques like heat-resistant coatings and sand-proof finishes that give lasting results.",
    bgColor: "#d9414f",
    textColor: "#fff",
    img: null,
  },
  {
    title: null,
    desc: null,
    bgColor: null,
    img: painter1, // example image URL
  },
  {
    title: "Precision",
    desc: "Our painters don’t just apply colors to the wall. They also check surfaces for hidden moisture and prep them for flawless adhesion.",
    bgColor: "#615f8d",
    textColor: "#fff",
    img: null,
  },
  {
    title: null,
    desc: null,
    bgColor: null,
    img: painter2,
  },
  {
    title: null,
    desc: null,
    bgColor: null,
    img: painter3,
  },
  {
    title: "Color Matchers",
    desc: "You can bring a fabric swatch or photo, and we will match it and recreate any shade. There will be no more “close enough” mismatches.",
    bgColor: "#4d443f",
    textColor: "#fff",
    img: null,
  },
  {
    title: null,
    desc: null,
    bgColor: null,
    img: painter4,
  },
  {
    title: "Surface Fixers",
    desc: "Our team of painters don’t just cover up cracks, they repair them properly before painting so the walls stay beautiful for years.",
    bgColor: "#0db6c7",
    textColor: "#fff",
    img: null,
  },
  {
    title: "Fully Equipped",
    desc: "Our painters arrive with professional-grade equipment to deliver flawless finishes efficiently.",
    bgColor: "#56af48",
    textColor: "#fff",
    img: null,
  },
  {
    title: null,
    desc: null,
    bgColor: null,
    img: painter5,
  },
  {
    title: "Spotless Finish",
    desc: "The team polishes every edge, smooths every stroke, ensuring your space looks perfect when the job is done.",
    bgColor: "#f05a22",
    textColor: "#fff",
    img: null,
  },
  {
    title: null,
    desc: null,
    bgColor: null,
    img: painter6,
  },
];


   return (
     <>
    <section className="hero-value">
    <div className="hero-content-value">
        <h1>Professional Painting Services in Sydney</h1>
        <p>
          At True Colour Services, we combine years of Sydney-based experience with a passion for delivering exceptional results. Our skilled painters provide precise, high-quality finishes that enhance the beauty and durability of your space. We pride ourselves on professionalism, open communication, and a seamless process that makes your 
          painting project stress-free and reliable from start to finish.
        </p>
        
        <Link to="/contact"
    // window.location.hostname === "localhost"
    //   ? "/contact"
    //   : "https://tc.deskgoo.com/contact"
   className="btn">Contact Now</Link>
    </div>
</section>
<section className="afford-section">
  <div className="afford-text">
    <h1>Affordable Painting Services in Sydney</h1>
    <h3>Ready to Serve You 24/7, Anytime, Anywhere</h3>
    <p>
     Sydney’s coastal climate brings its own challenges — from harsh 
     summer sun and heavy rainfall to salty sea air that can wear down paint over time. These conditions can cause fading, peeling, or cracking, making regular maintenance 
     essential to keep your property looking its best. <br/> <br/>At True Colour Services, we provide durable, high-quality painting solutions tailored to Sydney’s unique environment. Using premium materials and proven techniques, our experienced painters ensure your walls 
     stay vibrant, protected, and beautiful all year round. 
    </p>
  </div>

  <div className="afford-image">
    <img src={afford} alt="Paint Splash"></img>
  </div>
</section>


 {/* <section className="comer-section">
      <h2>Our Services</h2>
      <p>
        At True colour Services, we offer a wide range of professional
        painting services across Australia, delivering flawless, climate-proof
        finishes that protect and beautify homes and businesses.
      </p>

      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === "commercial" ? "active" : ""}`}
          onClick={() => setActiveTab("commercial")}
        >
          Commercial Painting
        </button>
        <button
          className={`tab-btn ${activeTab === "residential" ? "active" : ""}`}
          onClick={() => setActiveTab("residential")}
        >
          Residential Painting
        </button>
      </div> */}

      {/* Commercial Tab */}
      {/* {activeTab === "commercial" && (
        <div className="tab-content active">
          <h3>Commercial Painting</h3>
          <p>
            We offer professional-grade painting services in Australia for offices,
            hotels, and retail spaces, with durable coatings that withstand high
            traffic and maintain brand prestige.
          </p>
          <div className="comer-grid">
            {commercialServices.map((service, index) => (
              <div key={index} className="comer-card">
                <img src={service.img} alt={service.title} />
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/commercial" className="view-services-btn">
            VIEW ALL SERVICES
          </Link>
        </div>
      )} */}

      {/* Residential Tab */}
      {/* {activeTab === "residential" && (
        <div className="tab-content active">
          <h3>Residential Painting</h3>
          <p>
            From living rooms to bedrooms, we bring your home to life with
            colors and finishes that reflect your personality.
          </p>
          <div className="comer-grid">
            {residentialServices.map((service, index) => (
              <div key={index} className="comer-card">
                <img src={service.img} alt={service.title} />
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
              
            ))}
          </div>
           <Link to= "/residential" className="view-services-btn">
            VIEW ALL SERVICES
          </Link>
        </div>
      )}
    </section> */}
    <Services/>
      <section className="painting-process">
      {/* Gradient Header */}
      <div className="process-header">
        <h2>Our Painting Process</h2>
        <p>
          We follow a thorough, step-by-step process to ensure every project is
          completed with precision, quality, and care from start to finish.
        </p>
      </div>

      {/* Background Image */}
      <div
        className="process-bg"
        style={{ backgroundImage: `url(${paintBg})` }}
      ></div>

      {/* Steps */}
      <div className="process-steps">
        {steps.map((step, index) => (
          <div className="process-card" key={index}>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="process-header">
        <h2>What Makes Our Painting Service Stand Out</h2>
        <p>
         At True colour Painting Services, our certified painters use desert-tested coatings and durable paints to protect against Australia’s climate, ensuring 
         finishes that last for years, not just seasons.
        </p>
      </div>
    </section>
     <section className="box-section">
      <div className="cards-grid">
        {cards.map((card, index) => {
          if (card.img) {
            return (
              <div key={index} className="card image-card">
                <img src={card.img} alt="" />
              </div>
            );
          }
          return (
            <div
              key={index}
              className="card text-card"
              style={{ backgroundColor: card.bgColor, color: card.textColor || "#fff" }}
            >
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>

     <section className="why-choose-us">
      <div className="container">
        <h2>Why Homeowners and Businesses Choose Us</h2>
        <p className="intro-text">
          When you choose a painting company in Australia, we bet you will not be just looking for affordable prices. 
          It is about trust, reliability, and knowing the job will be done right. Here's why so many homeowners, 
          businessmen, and villa owners across Australia choose us again and again:
        </p>

        <div className="features-grid">

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
            <h3>Fast Communication</h3>
            <p>
             We pick up the phone, reply to messages, and keep you updated throughout the painting process, always.
            </p>
          </div>
        
        
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
            <img src={equip6} alt='equip-image'/></div>
            <h3>Eco-friendly Paints</h3>
            <p>
             Keep your place healthy because we use low-VOC, odorless paints that 
             are safe for kids, pets, and the environment.
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
            <img src={equip5} alt='equip-image'/></div>
            <h3>Fast Completion</h3>
            <p>
             Most painting jobs are done in 1-3 days with no compromise on quality.
              We always strive to deliver on schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
    
     <section className="reviews-section">
      <h2 className="reviews-heading">Our Customer Reviews on Google</h2>

      <div className="reviews-brand">
        <FcGoogle className="google-logo" />

        {/* SVG Stars */}
        <div className="star-rating">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star-icon"
            >
              <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.857 
              1.402-8.174-5.934-5.782 8.2-1.193z" />
            </svg>
          ))}
        </div>
      </div>

      <a
        // href="https://hipages.com.au/connect/truecolourservicesptyltd"
       href="https://share.google/gTADLWBn0afyRjkgr"   
        target="_blank"
        rel="noopener noreferrer"
        className="review-btn"
      >
        View Reviews
      </a>
    </section>

    <Testimonials/>
    <Quickpaint/>
    <Bookservice/>
    <HipagesReviews/>
    <ContactDetails/>

 {/* <section className="contact-section">
      <div className="contact-box phone-box">
        <FaPhoneAlt className="contact-icon" />
        <div>
          <h3>Phone</h3>
          <p>+971 55 242 1083</p>
        </div>
      </div>

      <div className="contact-box email-box">
        <FaEnvelope className="contact-icon" />
        <div>
          <h3>Email</h3>
          <p>info@dubaipaintingservices.ae</p>
        </div>
      </div>

      <div className="contact-box address-box">
        <FaMapMarkerAlt className="contact-icon" />
        <div>
          <h3>Address</h3>
          <p>304 Yes Business Center Al Barsha 1<br />Dubai</p>
        </div>
      </div>
    </section>
     */}
     </>
   )
 }
 
 export default Home