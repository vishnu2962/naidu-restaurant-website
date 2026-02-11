import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Dishes from "../components/Dishes";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import ChefSection from "../components/ChefSection";
import Banner from "../components/Banner";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dishes />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <ChefSection />
      </Reveal>

      <Banner />

      <Reveal>
        <Gallery />
      </Reveal>

      <Reservation />
      <Footer />
    </>
  );
}
