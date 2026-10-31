import cepillo from "../assets/cepillo.jpg";

function AcercaPage() {
    return (
        <div>
            <h2>Acerca de</h2>

            <img src={cepillo} alt="Cepillo de dientes con pasta dental" className="foto" />

            <p>CEUDENTAL es mi proyecto final del curso de React en Talendig.</p>

            <p>Es una aplicación para gestionar los pacientes de una clínica dental: permite agregarlos, buscarlos, ver su detalle, eliminarlos e importar pacientes de ejemplo desde una API.</p>

            <p className="credito">Foto de inicio: Harrison Keely, CC BY 4.0, vía Wikimedia Commons. Foto del cepillo: Steve Buissinne, CC0.</p>
        </div>
    );
}

export default AcercaPage;
