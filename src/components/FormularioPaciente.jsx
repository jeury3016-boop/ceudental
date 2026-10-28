import { useState } from "react";

function FormularioPaciente({ onAgregar }) {
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
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                placeholder="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <input
                placeholder="motivo"
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
            />
            <button type="submit">agregar</button>
        </form>
    );
}

export default FormularioPaciente;
