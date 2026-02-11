const dishes = [
  {
    name: "Idli Sambar",
    img: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    price: "₹120"
  },
  {
    name: "South Indian Samosa",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    price: "₹250"
  },
  {
    name: "Italian special",
    img: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
    price: "₹80"
  }
];

export default function Dishes() {
  return (
    <section id="dishes" className="section">
      <h1>Signature Dishes</h1>
      <div className="card-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="card">
            <img src={dish.img} />
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
