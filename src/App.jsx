import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TemaProvider } from "./context/TemaContext";
import { IdiomaProvider } from "./context/IdiomaContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InicioPage from "./pages/InicioPage";
import PacientesPage from "./pages/PacientesPage";
import DetallePacientePage from "./pages/DetallePacientePage";
import AcercaPage from "./pages/AcercaPage";
import NoEncontradaPage from "./pages/NoEncontradaPage";

function App() {
  return (
    <TemaProvider>
      <IdiomaProvider>
        <BrowserRouter>
          <Navbar />
          <main className="contenido">
            <Routes>
              <Route path="/" element={<InicioPage />} />
              <Route path="/pacientes" element={<PacientesPage />} />
              <Route path="/pacientes/:id" element={<DetallePacientePage />} />
              <Route path="/acerca" element={<AcercaPage />} />
              <Route path="*" element={<NoEncontradaPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </IdiomaProvider>
    </TemaProvider>
  );
}

export default App;
