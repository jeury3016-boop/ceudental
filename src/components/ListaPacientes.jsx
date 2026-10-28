import TarjetaPaciente from "./TarjetaPaciente";

function ListaPacientes({ pacientes }) {
    return (
        <div>
            {pacientes.map((paciente) => (
                <TarjetaPaciente
                key={paciente.id}
                nombre={paciente.nombre}
                telefono={paciente.telefono}
                motivo={paciente.motivo}
                />
            ))}
        </div>
    )
}
export default ListaPacientes;
