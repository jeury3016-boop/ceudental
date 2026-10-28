function TarjetaPaciente({ nombre,telefono,motivo}) {
    return (
        <div>
        <h3>{nombre}</h3>
        <p>Telefono: {telefono}</p>
        <p>Motivo: {motivo}</p>
        </div>
    );
}

export default TarjetaPaciente;
