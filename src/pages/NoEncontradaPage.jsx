import { useContext } from "react";
import { Link } from "react-router-dom";
import { IdiomaContext } from "../context/IdiomaContext";

function NoEncontradaPage() {
    const { t } = useContext(IdiomaContext);

    return (
        <div>
            <h2>{t.paginaNoEncontrada}</h2>

            <Link to="/">{t.volverInicio}</Link>
        </div>
    );
}

export default NoEncontradaPage;
