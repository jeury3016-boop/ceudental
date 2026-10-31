import { Link } from "react-router-dom";

function TarjetaPaciente({ id, nombre, telefono, motivo, onEliminar }) {
    return (
        <div className="tarjeta">
            <h3>
                <Link to={`/pacientes/${id}`}>{nombre}</Link>
            </h3>
            <p>Teléfono: {telefono}</p>
            <p>Motivo: {motivo}</p>
            <button onClick={onEliminar}>Eliminar</button>
        </div>
    );
}

export default TarjetaPaciente;
