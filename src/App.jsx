import { useState } from "react";

import ListaPacientes from "./components/ListaPacientes";

function App() {
  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: "Juan Pérez", telefono: "8498821554", motivo: "Dolor de muela" },
    { id: 2, nombre: "María López", telefono: "8498821555", motivo: "Limpieza bucal" },
    { id: 3, nombre: "Víctor Lara", telefono: "8095521122", motivo: "Revisión dental" },
  ]);

  function eliminarPaciente(id) {
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
  }

  return (
    <div>
      <h1>CEUDENTAL</h1>
      <ListaPacientes pacientes={pacientes} onEliminar={eliminarPaciente} />
    </div>
  );
}

export default App;
