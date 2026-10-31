import { useContext } from "react";
import { Link } from "react-router-dom";
import { IdiomaContext } from "../context/IdiomaContext";

function TarjetaPaciente({ id, nombre, telefono, motivo, onEliminar }) {
    const { t } = useContext(IdiomaContext);

    return (
        <div className="tarjeta">
            <h3>
                <Link to={`/pacientes/${id}`}>{nombre}</Link>
            </h3>
            <p>{t.telefono}: {telefono}</p>
            <p>{t.motivo}: {motivo}</p>
            <button onClick={onEliminar}>{t.eliminar}</button>
        </div>
    );
}

export default TarjetaPaciente;
