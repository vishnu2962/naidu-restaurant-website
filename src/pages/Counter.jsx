import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = (step = 1) => setCount(prev => prev + step);
  const decrement = (step = 1) => setCount(prev => (prev - step < 0 ? 0 : prev - step));
  const reset = () => setCount(0);

  return (
    <>
      <Navbar />

      <section className="section counter-section" style={{ paddingTop: "120px" }}>
        <h1>Counter</h1>
        <p className="counter-subtitle">
          Simple interactive counter in Fun Zone
        </p>

        <div className="counter-card">
          <div className="counter-display">{count}</div>

          <div className="counter-buttons">
            <button onClick={() => decrement(1)}>-1</button>
            <button onClick={() => increment(1)}>+1</button>
          </div>

          <div className="counter-buttons">
            <button onClick={() => decrement(5)}>-5</button>
            <button onClick={() => increment(5)}>+5</button>
            <button onClick={() => increment(10)}>+10</button>
          </div>

          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
