import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import pacientesIniciales from "../utils/pacientesIniciales";
import { IdiomaContext } from "../context/IdiomaContext";

function DetallePacientePage() {
  const { id } = useParams();
  const [pacientes] = useLocalStorage("pacientes", pacientesIniciales);
  const { t } = useContext(IdiomaContext);
  const paciente = pacientes.find((p) => p.id === Number(id));

  if (!paciente) {
    return <p>{t.noEncontrado} <Link to="/pacientes">{t.volver}</Link></p>;
  }

  return (
    <div>
      <h2>{paciente.nombre}</h2>
      <p>{t.telefono}: {paciente.telefono}</p>
      <p>{t.motivo}: {paciente.motivo}</p>
      <Link to="/pacientes">{t.volverLista}</Link>
    </div>
  );
}

export default DetallePacientePage;
