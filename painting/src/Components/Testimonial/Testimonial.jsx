 import React, { useState } from 'react';
import './Testimonial.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    // Slide 1
    [
      {
        id: 1,
        text: "I hired Michael for a painting job, and I’m really impressed! He was very friendly, professional, came on time, worked efficiently, and the results look fantastic!!! I couldn't be happier. I highly recommend him for any painting needs! 😊",
        author: "Jennifer Yu",
        rating:5
      },
      {
        id: 2,
        text: "Michael did such a good job on our walls even showing us how he gets such a beautiful even finish. His manner is very professional and a credit to his trade.Thank you very much Michael, we will recommend you to anyone who needs a painter.Stephen and Anne Glover.",
        author: "Stephen Glover",
         rating:5
      },
      {
        id: 3,
        text: "We hired Michael on the Hipages apt. He was the only tradie who texted and called us. He did a fantastic painting job! Our home looks new and fresh. We are extremely happy and his attention to detail was obvious. We highly recommend Michael from True Colour. You will be happy you used True Colour Services! Thanks Michael, we will definitely use you again.",
        author: "Pete Sullivan",
         rating:5
      }
    ],
    // Slide 2
    [
      {
        id: 4,
        text: "If you are looking for a company that is professional, has an attention to detail like no other and the results are impeccable?Then True Colour Services is your go to painting service.We were so happy with the work the team did and their response time and professionalism was above standards. I could not highly recommend them enough.",
        author: "maria efstathiou", 
        rating:5
      },
      {
        id: 5,
        text: "Michael did a great job! Professional, reasonable prices, punctual and very thorough and helpful. Highly recommend and would never look for anyone else for a painting job!",
        author: "Fadwa Fahad",
         rating:4
      },
      {
        id: 6,
        text: "I had a wonderful experience with the True colour Services; they painted my living room and did a splendid job – I am so pleased with the work done. The team was professional, efficient, and friendly.",
        author: "Stebev",
         rating:5
      }
    ],
    // Slide 3
    [
      {
        id: 7,
        text: "I was really impressed with the work Mike and True Colour Services did. They were very efficient and completed the job in the timeframe they said they would and it was a good price too.Our place looks so much better now.Highly recommend!",
        author: "Ashlee Chew",
         rating:5
      },
      {
        id: 8,
        text: "The color consultation service was incredibly helpful. They helped us choose perfect shades that transformed our space completely.",
        author: "Youssef",
         rating:5
      },
      {
        id: 9,
        text: "Reliable, punctual, and high-quality workmanship. They handled both interior and exterior painting of our restaurant beautifully.",
        author: "Leila",
         rating:4
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

   // ⭐ Helper function to render stars
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Hear From Our Happy Customers</h2>
        
        {/* <div className="slider-container">
          <button className="slider-arrow prev" onClick={prevSlide}>&#10094;</button> */}
          
          <div className="slider">
            <div 
              className="slides" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((slide, slideIndex) => (
                <div key={slideIndex} className="slide">
                  {slide.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                      <p className="testimonial-text">{testimonial.text}</p>
                          {renderStars(testimonial.rating)}
                      <div className="testimonial-author">{testimonial.author}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* <button className="slider-arrow next" onClick={nextSlide}>&#10095;</button> */}
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      {/* </div> */}
    </section>
  );
};

export default Testimonials;