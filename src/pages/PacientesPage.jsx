import { useState } from "react";

import ListaPacientes from "../components/ListaPacientes";
import FormularioPaciente from "../components/FormularioPaciente";
import Buscador from "../components/Buscador";

function PacientesPage() {
  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: "Juan Pérez", telefono: "8498821554", motivo: "Dolor de muela" },
    { id: 2, nombre: "María López", telefono: "8498821555", motivo: "Limpieza bucal" },
    { id: 3, nombre: "Víctor Lara", telefono: "8095521122", motivo: "Revisión dental" },
  ]);
  const [busqueda, setBusqueda] = useState("");

  function eliminarPaciente(id) {
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
  }

  function agregarPaciente(nuevo) {
    setPacientes([...pacientes, nuevo]);
  }

  const pacientesFiltrados = pacientes.filter((paciente) =>
    paciente.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>CEUDENTAL</h1>
      <FormularioPaciente onAgregar={agregarPaciente} />
      <Buscador texto={busqueda} onBuscar={setBusqueda} />
      <ListaPacientes pacientes={pacientesFiltrados} onEliminar={eliminarPaciente} />
    </div>
  );
}

export default PacientesPage;
