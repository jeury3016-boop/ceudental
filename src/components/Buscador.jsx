import { useContext } from "react";
import { IdiomaContext } from "../context/IdiomaContext";

function Buscador({ texto, onBuscar }) {
  const { t } = useContext(IdiomaContext);

  return (
    <input
      placeholder={t.buscar}
      value={texto}
      onChange={(e) => onBuscar(e.target.value)}
    />
  );
}

export default Buscador;
