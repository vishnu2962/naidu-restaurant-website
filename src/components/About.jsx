import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal>
      <section id="about" className="section about">
        <div>
          <h2>About Us</h2>
          <p>
            Royal Spice offers premium South Indian cuisine with a luxury dining
            experience.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de" />
      </section>
    </Reveal>
  );
}
