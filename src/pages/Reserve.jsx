import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Reserve() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation request received! Our team will contact you.");
    setForm({
      name: "",
      phone: "",
      guests: "",
      date: "",
      time: ""
    });
  };

  return (
    <>
      <Navbar />

      <section className="section reservation-page" style={{ paddingTop: "120px" }}>
        <h1>Reserve a Table</h1>
        <p>Book your table and enjoy delicious food with us.</p>

        <form className="reserve-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />

          <input
            type="number"
            placeholder="Number of Guests"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            required
          />

          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />

          <input
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            required
          />

          <button type="submit">Reserve Table</button>
        </form>
      </section>

      <Footer />
    </>
  );
}
