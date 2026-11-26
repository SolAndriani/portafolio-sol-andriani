import Header from "./components/Header";
import Presentacion from "./components/Presentacion";
import Tecnologias from "./components/Tecnologias";
import Proyectos from "./components/Proyectos";
import CasoAustreon from "./components/CasoAustreon";
import CasoLicitaciones from "./components/CasoLicitaciones";
import VisorImagen from "./components/VisorImagen";
import ComoTrabajo from "./components/ComoTrabajo";
import Footer from "./components/Footer";
import Cortina from "./components/Cortina";
import FondoShader from "./components/FondoShader";
import { IdiomaProvider } from "./idioma";

import useMagnetico from "./magnetico";
import useScrollSuave from "./scrollSuave";
import useRevelar from "./revelar";

import "./App.css";

function App() {
  useMagnetico();
  useScrollSuave();
  useRevelar();

  return (
    <IdiomaProvider>
      <Header />
      <Cortina />
      <FondoShader />
      <main className="layout-principal">
        <Presentacion />
        <Tecnologias />
        <Proyectos />
        <CasoAustreon />
        <CasoLicitaciones />
        <ComoTrabajo />
        <Footer />
      </main>
      <VisorImagen />
    </IdiomaProvider>
  );
}

export default App;
