import { useContext } from "react";
import { IdiomaContext } from "../context/IdiomaContext";
import cepillo from "../assets/cepillo.jpg";

function AcercaPage() {
    const { t } = useContext(IdiomaContext);

    return (
        <div>
            <h2>{t.acercaTitulo}</h2>

            <img src={cepillo} alt="Cepillo de dientes con pasta dental" className="foto" />

            <p>{t.acercaTexto1}</p>

            <p>{t.acercaTexto2}</p>

            <p className="credito">{t.credito}</p>
        </div>
    );
}

export default AcercaPage;
