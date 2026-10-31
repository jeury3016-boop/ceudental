import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TemaContext } from "../context/TemaContext";

function Navbar() {
  const { oscuro, cambiarTema } = useContext(TemaContext);

  return (
    <nav>
      <span className="logo">🦷 CEUDENTAL</span>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/pacientes">Pacientes</NavLink>
      <NavLink to="/acerca">Acerca</NavLink>
      <button onClick={cambiarTema}>{oscuro ? "☀️ Claro" : "🌙 Oscuro"}</button>
    </nav>
  );
}

export default Navbar;
