import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Tecnologias from './components/Tecnologias';
import Proyectos from './components/Proyectos';
import CasoAustreon from './components/CasoAustreon';
import ComoTrabajo from './components/ComoTrabajo';
import Footer from './components/Footer';

import useMagnetico from './magnetico';
import useScrollSuave from './scrollSuave';

import './App.css';

function App() {
  useMagnetico();
  useScrollSuave();

  return (
    <>
      <Header />
      <main className="layout-principal">
        <Presentacion />
        <Tecnologias />
        <Proyectos />
        <CasoAustreon />
        <ComoTrabajo />
        <Footer />
      </main>
    </>
  );
}

export default App;
