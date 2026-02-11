import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/AboutPage";
import FunZone from "./pages/FunZone";
import TicTacToe from "./pages/TicTacToe";
import Counter from "./pages/Counter";
import Timer from "./pages/Timer";
import CrudDemo from "./pages/CrudDemo";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Reserve from "./pages/Reserve";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funzone" element={<FunZone />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/crud" element={<CrudDemo />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>

        
    </BrowserRouter>
  );
}
