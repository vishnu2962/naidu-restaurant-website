import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <section className="section" style={{ paddingTop: "120px" }}>
        <h1>Contact Us</h1>

        <div className="contact-container">

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Naidu Royal Spicy</h2>
            <p>📍 Kukatpally, Hyderabad</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 naiduroyalspicy@gmail.com</p>
            <p>We are happy to serve you every day.</p>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            <button type="submit">Send Message</button>
          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}
