export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  ];

  return (
    <section id="gallery" className="section">
      <h2>Gallery</h2>
      <div className="gallery">
        {images.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>
    </section>
  );
}
