import { createContext, useState } from "react";
import traducciones from "../utils/traducciones";

// eslint-disable-next-line react-refresh/only-export-components
export const IdiomaContext = createContext();

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState("es");

  function cambiarIdioma() {
    setIdioma(idioma === "es" ? "en" : "es");
  }

  const t = traducciones[idioma];

  return (
    <IdiomaContext.Provider value={{ idioma, cambiarIdioma, t }}>
      {children}
    </IdiomaContext.Provider>
  );
}
