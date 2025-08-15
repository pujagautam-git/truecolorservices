 import React from 'react'
 import "./Commercial.css";


 const Commercial = () => {
   return (
    <>
     <section className="residential-section">
      {/* Pink Wave at bottom right */}
      <div className="pink-wave"></div>

      {/* Pink Splash at top right */}
      <img src={""} alt="Paint Splash" className="paint-splash" />

      {/* Content */}
      <div className="residential-content">
        <h1>Commercial Painting Services</h1>
        <p>
          At DPS, we understand that your home is your sanctuary. Whether it’s a residential
          house painting project or a complete makeover of your apartment, we turn houses into
          homes with durable, climate-ready paints designed for Dubai’s harsh sun, humidity, and sand.
          From refinishing your apartment in Dubai Marina to protecting your villa in Arabian Ranches,
          our painting services combine European-quality materials with local expertise. Let us paint
          your living space with lasting, high-quality results.
        </p>
        <button className="contact-btn">Contact Now</button>
      </div>
    </section>
    <section className="business-section">
      <div className="business-container reverse">
        {/* Image on the left */}
        <div className="business-image">
          <img src={""} alt="Painting a business space" />
        </div>

        {/* Text on the right */}
        <div className="business-text">
          <h2>Why Painting is Important for Your Business</h2>
          <p>
            Your business space speaks before you do. First impressions count, and faded walls
            or surface damage can send the wrong signal. A professional paint job protects your
            property from Dubai’s intense sun, humid air, and frequent dust storms. From DIFC
            offices to Deira showrooms, we help businesses stay sharp, safe, and ready to make
            a lasting impression.
          </p>
        </div>
      </div>
    </section>
    </>
   )
 }
 
 export default Commercial