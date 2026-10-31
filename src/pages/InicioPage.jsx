import { useContext } from "react";
import { Link } from "react-router-dom";
import { TemaContext } from "../context/TemaContext";
import { IdiomaContext } from "../context/IdiomaContext";
import consultorio from "../assets/consultorio.jpg";

const iconos = ["🪥", "😁", "🦷", "🩺"];

function InicioPage() {
    const { oscuro } = useContext(TemaContext);
    const { t } = useContext(IdiomaContext);

    return (
        <div>
            <section className="hero" style={{ backgroundImage: `url(${consultorio})` }}>
                <div className="hero-capa">
                    <h2>{t.bienvenida}</h2>
                    <p>{t.descripcion}</p>
                    <Link to="/pacientes" className="hero-boton">{t.verPacientes}</Link>
                </div>
            </section>

            <h2>{t.nuestrosServicios}</h2>
            <div className="servicios">
                {t.servicios.map((servicio, i) => (
                    <div key={servicio} className="servicio">
                        <span>{iconos[i]}</span>
                        <p>{servicio}</p>
                    </div>
                ))}
            </div>

            <p>{t.temaActual}: {oscuro ? t.temaOscuro : t.temaClaro}</p>
        </div>
    );
}

export default InicioPage;
