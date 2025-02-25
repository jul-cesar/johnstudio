import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacto from "./pages/Contacto";
import Landing from "./pages/Landing";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
