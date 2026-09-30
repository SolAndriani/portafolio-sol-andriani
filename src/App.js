import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Proyectos from './components/Proyectos';
import CasoAustreon from './components/CasoAustreon';
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
        <Tecnologias />
      </main>
      <Footer />
    </>
  );
}

export default App;
