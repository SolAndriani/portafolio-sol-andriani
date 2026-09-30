import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Proyectos from './components/Proyectos';
import CasoAustreon from './components/CasoAustreon';
import SobreMi from './components/SobreMi';
import Tecnologias from './components/Tecnologias';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="layout-principal">
        <Presentacion />
        <Proyectos />
        <CasoAustreon />
        <SobreMi />
        <Tecnologias />
      </main>
      <Footer />
    </>
  );
}

export default App;
