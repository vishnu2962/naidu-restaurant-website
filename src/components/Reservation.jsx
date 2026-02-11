export default function Reservation() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation request received. Our team will contact you shortly.");
  };

  return (
    <section className="section reservation">
      <h1>Reserve a Table</h1>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="date" required />
        <input type="time" required />

        <button type="submit">Book Table</button>
      </form>
    </section>
  );
}
