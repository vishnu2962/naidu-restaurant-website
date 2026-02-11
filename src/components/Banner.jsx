export default function Banner() {
  return (
    <section
      className="parallax-banner"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4)"
      }}
    >
      <div className="banner-overlay">
        <h2>Experience Dining Like Never Before</h2>
        <p>Luxury ambience. Authentic flavors. Memorable moments.</p>
      </div>
    </section>
  );
}
