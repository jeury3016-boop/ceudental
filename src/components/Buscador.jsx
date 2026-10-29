function Buscador({ texto, onBuscar }) {
  return (
    <input
      placeholder="Buscar paciente"
      value={texto}
      onChange={(e) => onBuscar(e.target.value)}
    />
  );
}

export default Buscador;
