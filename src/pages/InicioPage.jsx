import { useContext } from "react";
import { Link } from "react-router-dom";
import { TemaContext } from "../context/TemaContext";
import consultorio from "../assets/consultorio.jpg";

const servicios = [
    { id: 1, icono: "🪥", nombre: "Limpieza dental" },
    { id: 2, icono: "😁", nombre: "Blanqueamiento" },
    { id: 3, icono: "🦷", nombre: "Ortodoncia" },
    { id: 4, icono: "🩺", nombre: "Revisión general" },
];

function InicioPage() {
    const { oscuro } = useContext(TemaContext);

    return (
        <div>
            <section className="hero" style={{ backgroundImage: `url(${consultorio})` }}>
                <div className="hero-capa">
                    <h2>Bienvenido a CEUDENTAL</h2>
                    <p>CEUDENTAL ofrece servicios odontológicos para cuidar la salud bucal de sus pacientes, brindando atención profesional para mantener una sonrisa sana y hermosa.</p>
                    <Link to="/pacientes" className="hero-boton">Ver pacientes</Link>
                </div>
            </section>

            <h2>Nuestros servicios</h2>
            <div className="servicios">
                {servicios.map((servicio) => (
                    <div key={servicio.id} className="servicio">
                        <span>{servicio.icono}</span>
                        <p>{servicio.nombre}</p>
                    </div>
                ))}
            </div>

            <p>Tema actual: {oscuro ? "oscuro 🌙" : "claro ☀️"}</p>
        </div>
    );
}

export default InicioPage;
