import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section
        className="about-hero"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4)"
        }}
      >
        <div className="about-hero-overlay">
          <h1>About Naidu Royal Spicy ❤︎</h1>
          <p>Serving Taste. Delivering Happiness.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="about-page">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            alt="restaurant"
          />

          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Naidu Royal Spicy was started with a passion to serve
              authentic flavors with modern presentation. Our recipes
              are crafted using fresh ingredients, traditional spices,
              and a dedication to quality.
            </p>

            <p>
              We believe dining is not just about food — it’s about
              experience, comfort, and memories.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Fresh Ingredients</h3>
            <p>We use only fresh and high-quality ingredients.</p>
          </div>

          <div className="why-card">
            <h3>Expert Chefs</h3>
            <p>Our chefs bring years of experience and passion.</p>
          </div>

          <div className="why-card">
            <h3>Hygienic Kitchen</h3>
            <p>Cleanliness and food safety are our top priority.</p>
          </div>
        </div>
      </section>

      {/* Chef Message */}
      <section className="chef-message">
        <div className="chef-box">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="chef"
          />

          <div>
            <h2>Message From Our Chef</h2>
            <p>
              "Cooking is an art and every dish tells a story.
              At Naidu Royal Spicy, our goal is to give you
              unforgettable taste in every bite."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
