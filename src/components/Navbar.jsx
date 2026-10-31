import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TemaContext } from "../context/TemaContext";
import { IdiomaContext } from "../context/IdiomaContext";

function Navbar() {
  const { oscuro, cambiarTema } = useContext(TemaContext);
  const { idioma, cambiarIdioma, t } = useContext(IdiomaContext);

  return (
    <nav>
      <span className="logo">🦷 CEUDENTAL</span>
      <NavLink to="/">{t.inicio}</NavLink>
      <NavLink to="/pacientes">{t.pacientes}</NavLink>
      <NavLink to="/acerca">{t.acerca}</NavLink>
      <button onClick={cambiarTema}>{oscuro ? t.claro : t.oscuro}</button>
      <button onClick={cambiarIdioma}>{idioma === "es" ? "🌐 English" : "🌐 Español"}</button>
    </nav>
  );
}

export default Navbar;
