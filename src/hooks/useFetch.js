import { useState, useEffect } from "react";

function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los datos");
        return res.json();
      })
      .then((data) => setDatos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [url]);

  return { datos, cargando, error };
}

export default useFetch;
