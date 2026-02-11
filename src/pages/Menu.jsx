import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then(res => res.json())
      .then(data => {
        const items = data.meals.slice(0, 20); // minimum 20 items
        setMeals(items);
        setFiltered(items);
      });
  }, []);

  const filterCategory = (category) => {
    if (category === "all") {
      setFiltered(meals);
    } else {
      setFiltered(meals.filter(item => item.strCategory === category));
    }
  };

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const goToOrderPage = () => {
    navigate("/order", { state: { order } });
  };

  return (
    <>
      <Navbar />

      <section className="section" style={{ paddingTop: "120px" }}>
        <h1>Our Menu</h1>

        {/* Filters */}
        <div style={{ marginBottom: "30px" }}>
          <button onClick={() => filterCategory("all")}>All</button>
          <button onClick={() => filterCategory("Chicken")}>Chicken</button>
          <button onClick={() => filterCategory("Vegetarian")}>Veg</button>
          <button onClick={() => filterCategory("Seafood")}>Seafood</button>
          <button onClick={() => filterCategory("Dessert")}>Dessert</button>
        </div>

        {/* Cards */}
        <div className="card-grid">
          {filtered.map(item => (
            <div className="card" key={item.idMeal}>
              <img src={item.strMealThumb} alt={item.strMeal} />
              <div style={{ padding: "15px" }}>
                <h3>{item.strMeal}</h3>
                <p>{item.strCategory}</p>
                <button onClick={() => addToOrder(item)}>
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "30px" }}>
          <button onClick={goToOrderPage}>
            Go To Order ({order.length})
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
