import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [oscuro, setOscuro] = useState(false);

  function cambiarTema() {
    setOscuro(!oscuro);
  }

  return (
    <TemaContext.Provider value={{ oscuro, cambiarTema }}>
      <div className={oscuro ? "oscuro" : ""}>{children}</div>
    </TemaContext.Provider>
  );
}
