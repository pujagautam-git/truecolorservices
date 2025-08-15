 import React, { useState } from 'react';
import './Testimonial.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    // Slide 1
    [
      {
        id: 1,
        text: "At first, I was skeptical while looking for a painting service for my commercial property but I must say that True colour Services were a pleasant surprise. Their painters were professional and got the job done in a very timely and efficient manner.I would definitely recommended their services to any business looking for a good painter",
        author: "Ragan"
      },
      {
        id: 2,
        text: "I had a wonderful experience with the True colour Services; they painted my living room and did a splendid job – I am so pleased with the work done. The team was professional, efficient, and friendly,the prices were reasonable, and the work was done within the set time frame.",
        author: "Harry"
      },
      {
        id: 3,
        text: "I was deeply impressed with the services that True colour Services offered to me. They started from the ceilings and the trims, painting my whole house. The work done was professional and very neat.",
        author: "Lisa"
      }
    ],
    // Slide 2
    [
      {
        id: 4,
        text: "I was deeply impressed with the services that True colour Services offered to me. They started from the ceilings and the trims, painting my whole house. The work done was professional and very neat.",
        author: "Alexia"
      },
      {
        id: 5,
        text: "At first, I was skeptical while looking for a painting service for my commercial property but I must say that True colour Services were a pleasant surprise. Their painters were professional and got the job done in a very timely and efficient manner.",
        author: "John"
      },
      {
        id: 6,
        text: "I had a wonderful experience with the True colour Services; they painted my living room and did a splendid job – I am so pleased with the work done. The team was professional, efficient, and friendly.",
        author: "Stebev"
      }
    ],
    // Slide 3
    [
      {
        id: 7,
        text: "Our office looks brand new after their service. Minimal disruption to our work and the team cleaned up thoroughly after finishing.",
        author: "Nadia"
      },
      {
        id: 8,
        text: "The color consultation service was incredibly helpful. They helped us choose perfect shades that transformed our space completely.",
        author: "Youssef"
      },
      {
        id: 9,
        text: "Reliable, punctual, and high-quality workmanship. They handled both interior and exterior painting of our restaurant beautifully.",
        author: "Leila"
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
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