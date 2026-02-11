import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function FunZone() {
  return (
    <>
      <Navbar />

      <section className="section" style={{ paddingTop: "120px" }}>
        <h1>Fun Zone</h1>
        <p>Play with our mini apps and features.</p>

        <div className="card-grid">

          <Link to="/tictactoe" className="fun-card">
            <h3>Tic Tac Toe</h3>
            <p>Play the classic XO game.</p>
          </Link>

          <Link to="/counter" className="fun-card">
            <h3>Counter</h3>
            <p>Simple counter demo.</p>
          </Link>

          <Link to="/timer" className="fun-card">
            <h3>Timer</h3>
            <p>Start and stop timer.</p>
          </Link>

          <Link to="/crud" className="fun-card">
            <h3>CRUD Demo</h3>
            <p>Add, edit and delete data.</p>
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
}


