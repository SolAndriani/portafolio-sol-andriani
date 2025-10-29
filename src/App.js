import Header from './components/Header';
import Presentacion from './components/Presentacion';
import SobreMi from './components/SobreMi';
import Tecnologias from './components/Tecnologias'; 
import Proyectos from './components/Proyectos';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="layout-principal">
        <Presentacion />
        <SobreMi />
        <Tecnologias />        
        <Proyectos />
        <Galeria />
      </main>
      <Footer />
    </>
  );
}

export default App;
