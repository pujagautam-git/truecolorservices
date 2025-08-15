 import React from 'react'
 import kitchenroom from "../../assets/Blog/den.png";
 import "./kitchen.css";

 const kitchen = () => {

    const ideas = [
    {
      title: "Idea #1: Two-tone Kitchen Cabinets",
      description:
        "One of the most creative and appealing ways to paint your kitchen cabinets is with a two-tone look. This design makes the kitchen look dynamic. You can combine one light and dark tone or create contrast by pairing bold hues with neutral tones. The two-tone style also works wonderfully with open shelving. Combining natural wood with painted cabinets can bring in a cozy feel, which will have a touch of modernity, too."
    },
    {
      title: "Idea #2: Bold Navy Blue",
      description:
        "For a luxurious feel, navy blue is a great choice. It’s a bold alternative to neutral tones and pairs beautifully with brass or gold hardware.The rich hue can make your kitchen feel refined and cozy. Try navy blue cabinets with white countertops and backsplashes for a more elegant look."
    },
    {
      title: "Idea #3: Soft Pastel Shades",
      description:
        "Pastel greens, blues, or pinks can make your kitchen feel fresh and inviting. Perfect for brightening up smaller spaces.If you want a light and airy kitchen vibe, pastels are your best friends. Light pinks, muted blues, soft lavenders, and mint greens can add serenity to your kitchen. These colors suit coastal, farmhouse, or vintage-inspired kitchen designs. Pastel colors can work best with minimalist designs, natural wood accents, and gold fixtures for a touch of elegance."
    },
    {
      title: "Idea #4: Classic White Elegance",
      description:
        "White cabinets never go out of style. They create a clean and airy look, making the kitchen feel bigger and brighter."
    }
  ];

   return (
    <>
       <section className="blog-post">
      <h1 className="blog-title-value">
        Creative Painted Kitchen Cabinet Ideas You’ll Love
      </h1>
      <div className="blog-meta">
        <img
          src={kitchenroom}
          alt="Author"
          className="author-img"
        />
        <span className="author-name">By Rimsha Arif</span>
        <span className="post-date">April 21, 2025</span>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-pinterest-p"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="blog-image">
        <img src={""} alt="Kitchen Cabinets" />
      </div>
      <p className="blog-text">
        Cabinets are the centerpiece of your kitchen, and they deserve your keen attention. 
        While kitchen cabinets can often become overlooked in terms of decor, they are 
        important in defining the look of your entire kitchen. If you want to upgrade your 
        kitchen without undergoing a full renovation, painting your cabinets is a creative 
        solution that will make a huge impact. To style your outdated kitchen, here are some 
        creative painted kitchen cabinet ideas to get a fresh look.
      </p>
    </section>
     <section className="kitchen-info">
      <div className="info-block">
        <h2>Why Paint the Kitchen Cabinets?</h2>
        <p>
          There are many reasons why painting kitchen cabinets is an excellent idea.
          First, it is a low-effort way to update your space compared to replacing the
          cabinets altogether. Second, DIY painting kitchen cabinets allows you to
          experiment with color and finishes with endless customization. Finally,
          painting can refresh the look of your kitchen with a quicker turnaround
          without major construction.
        </p>
      </div>

      <div className="info-block">
        <h2>Best Colors for Kitchen Cabinets</h2>
        <p>
          When selecting kitchen cupboard paint colors, the options are practically
          limitless. However, thinking about the vibe you want for your kitchen is
          helpful. Do you prefer a serene and modern atmosphere? Here are the best
          colors for kitchen cabinets:
        </p>
        <ul>
          <li>Neutral tones like white, grey, and beige</li>
          <li>Bold colors like blue, green, or yellow</li>
          <li>Soft pastels</li>
          <li>Dark tones such as charcoal or black</li>
        </ul>
      </div>
    </section>
    
     <section className="kitchen-section">
      <div className="kitchen-header">
        <h2>Top Kitchen Paint Ideas for Cabinets</h2>
        <div className="kitchen-layout">
          <div className="color-palette">
            <div style={{ backgroundColor: "#7DBA4F" }}></div>
            <div style={{ backgroundColor: "#6E665D" }}></div>
            <div style={{ backgroundColor: "#D6C3B0" }}></div>
            <div style={{ backgroundColor: "#EAE3DA" }}></div>
          </div>
          <img src={""} alt="Kitchen Cabinets" className="kitchen-image" />
        </div>
      </div>

      <p className="intro-text">
        Here are the best painted kitchen cabinet ideas to give your cooking place a new makeover:
      </p>

      <div className="idea-list">
        {ideas.map((idea, idx) => (
          <div key={idx} className="idea-item">
            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
   )
 }
 
 export default kitchen