function TarjetaPaciente({ nombre, telefono, motivo, onEliminar }) {
    return (
        <div>
            <h3>{nombre}</h3>
            <p>Teléfono: {telefono}</p>
            <p>Motivo: {motivo}</p>
            <button onClick={onEliminar}>Eliminar</button>
        </div>
    );
}

export default TarjetaPaciente;
