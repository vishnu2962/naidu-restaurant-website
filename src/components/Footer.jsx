import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    e.target.reset();
  };

  return (
    <footer className="premium-footer">

      <div className="footer-wrapper">

        {/* Restaurant Info */}
        <div className="footer-column">
          <h2 className="footer-logo">Naidu Royal Spicy ❤︎</h2>
          <p>
            Authentic taste, rich spices, and unforgettable dining experience.
            Visit us to enjoy premium quality food.
          </p>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>📍 Kukatpalli, Hyderabad</p>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉ info@naiduroyalspicy.com</p>

          <h3 className="timing-title">Timings</h3>
          <p>Mon - Fri : 11 AM - 10 PM</p>
          <p>Sat - Sun : 10 AM - 11 PM</p>
        </div>

        
        <div className="footer-column">
          <h3>Feedback</h3>

          <form className="feedback-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Feedback" required></textarea>
            <button type="submit">Send Feedback</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Naidu Royal Spicy. All Rights Reserved.
      </div>
    </footer>
  );
}
