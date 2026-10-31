import { useState, useMemo, useContext } from "react";
import { IdiomaContext } from "../context/IdiomaContext";
import useLocalStorage from "../hooks/useLocalStorage"; 
import ListaPacientes from "../components/ListaPacientes";
import FormularioPaciente from "../components/FormularioPaciente";
import Buscador from "../components/Buscador";
import pacientesIniciales from "../utils/pacientesIniciales";
import useFetch from "../hooks/useFetch";
import { adaptarPaciente } from "../utils/adaptar";

const URL_EJEMPLO = "https://jsonplaceholder.typicode.com/users";

function PacientesPage() {
  const [pacientes, setPacientes] = useLocalStorage("pacientes", pacientesIniciales);
  const [busqueda, setBusqueda] = useState("");
  const { datos, cargando, error } = useFetch(URL_EJEMPLO);
  const { t } = useContext(IdiomaContext);

  function eliminarPaciente(id) {
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
  }

  function agregarPaciente(nuevo) {
    setPacientes([...pacientes, nuevo]);
  }

  function importarEjemplos() {
    const importados = datos
      .map(adaptarPaciente)
      .filter((nuevo) => !pacientes.some((p) => p.nombre === nuevo.nombre));

    setPacientes([...pacientes, ...importados]);
  }

  const pacientesFiltrados = useMemo(() =>
    pacientes.filter((paciente) =>
      paciente.nombre.toLowerCase().includes(busqueda.toLowerCase())
    ),
    [pacientes, busqueda]
  );

  return (
    <div>
      <h2>{t.pacientes}</h2>
      <p className="contador">{t.totalPacientes}: {pacientes.length}</p>
      <FormularioPaciente onAgregar={agregarPaciente} />
      {cargando && <p>{t.cargando}</p>}
      {error && <p>Error: {error}</p>}
      {datos && <button onClick={importarEjemplos}>{t.importar}</button>}
      <Buscador texto={busqueda} onBuscar={setBusqueda} />
      {pacientesFiltrados.length > 0 && (
        <ListaPacientes pacientes={pacientesFiltrados} onEliminar={eliminarPaciente} />
      )}
      {pacientesFiltrados.length === 0 && <p>{t.sinResultados}</p>}
    </div>
  );
}

export default PacientesPage;
