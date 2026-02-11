export default function ChefSection() {
  return (
    <section className="chef-section">
      
      <div className="chef-container">
        
        <div className="chef-image">
          <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf" alt="Chef"/>
        </div>

        <div className="chef-content">
          <h2>Meet Our Master Chef</h2>
          <p>
            With over 15 years of culinary excellence, our chef blends
            authentic South Indian flavors with modern presentation to
            create a luxury dining experience.
          </p>

          <div className="stats">
            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat">
              <h3>5000+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="stat">
              <h3>120+</h3>
              <p>Signature Dishes</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
