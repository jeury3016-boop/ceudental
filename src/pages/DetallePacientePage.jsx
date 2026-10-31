import { useParams, Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import pacientesIniciales from "../utils/pacientesIniciales";

function DetallePacientePage() {
  const { id } = useParams();
  const [pacientes] = useLocalStorage("pacientes", pacientesIniciales);
  const paciente = pacientes.find((p) => p.id === Number(id));

  if (!paciente) {
    return <p>Paciente no encontrado. <Link to="/pacientes">Volver</Link></p>;
  }

  return (
    <div>
      <h2>{paciente.nombre}</h2>
      <p>Teléfono: {paciente.telefono}</p>
      <p>Motivo: {paciente.motivo}</p>
      <Link to="/pacientes">Volver a la lista</Link>
    </div>
  );
}

export default DetallePacientePage;
