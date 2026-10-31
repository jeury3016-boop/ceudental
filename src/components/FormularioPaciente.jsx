import { useState, useContext } from "react";
import { IdiomaContext } from "../context/IdiomaContext";

function FormularioPaciente({ onAgregar }) {
    const { t } = useContext(IdiomaContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [motivo, setMotivo] = useState("");

    function manejarEnvio(e) {
        e.preventDefault();
        if (nombre.trim() === "") {
            return;
        }
        onAgregar({ id: Date.now(), nombre, telefono, motivo, });
        setNombre("");
        setTelefono("");
        setMotivo("");
    }

    return (
        <form onSubmit={manejarEnvio}>
            <input
                placeholder={t.nombre}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                placeholder={t.telefono}
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <input
                placeholder={t.motivo}
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
            />
            <button type="submit">{t.agregar}</button>
        </form>
    );
}

export default FormularioPaciente;
