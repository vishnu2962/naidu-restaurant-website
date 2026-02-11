import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <Navbar />

      <section className="timer-section">
        <div className="timer-card">
          <h1>Kitchen Timer</h1>
          <p>Use this timer while waiting for your delicious meal 🍽</p>

          <div className="timer-display">
            {formatTime(time)}
          </div>

          <div className="timer-buttons">
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
