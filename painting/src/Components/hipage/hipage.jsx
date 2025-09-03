 import { FaHammer } from "react-icons/fa"; // Hipages style icon
import "./hipage.css";

const HipagesReviews = () => {
  return (
    <section className="hipages-reviews-section">
      <h2 className="hipages-reviews-heading">Our Customer Reviews on Hipages</h2>

      <div className="hipages-reviews-brand">
        <FaHammer className="hipages-logo" />

        {/* SVG Stars */}
        <div className="hipages-star-rating">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="https://hipages.com.au/connect/truecolourservicesptyltd"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hipages-star-icon"
            >
              <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.857 
              1.402-8.174-5.934-5.782 8.2-1.193z" />
            </svg>
          ))}
        </div>
      </div>

      <a
        href="https://hipages.com.au/connect/truecolourservicesptyltd"   
        target="_blank"
        rel="noopener noreferrer"
        className="hipages-review-btn"
      >
        View Reviews
      </a>
    </section>
  );
};

export default HipagesReviews;
