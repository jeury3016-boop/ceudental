export function adaptarPaciente(item) {
  return { id: Date.now() + item.id, nombre: item.name, telefono: item.phone, motivo: "Paciente importado" };
}
