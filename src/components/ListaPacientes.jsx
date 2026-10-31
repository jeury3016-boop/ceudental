import TarjetaPaciente from "./TarjetaPaciente";

function ListaPacientes({ pacientes, onEliminar }) {
    return (
        <div>
            {pacientes.map((paciente) => (
                <TarjetaPaciente
                key={paciente.id}
                id={paciente.id}
                nombre={paciente.nombre}
                telefono={paciente.telefono}
                motivo={paciente.motivo}
                onEliminar={() => onEliminar(paciente.id)}
                />
            ))}
        </div>
    )
}
export default ListaPacientes;
