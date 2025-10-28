import React, { useState } from "react";
import Contacto from "./Contacto";
import "./Presentacion.css";

export default function Presentacion() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="presentacion" className="presentacion">
      <div className="presentacion-contenedor">
        <div className="foto-lateral">
          <img 
            src="/imagenes/foto sol.jpg" 
            alt="Sol Andriani, desarrolladora web" 
            className="foto-sol"
          />
        </div>

        <div className="texto-presentacion">
          <h1>¡Hola! Soy <span>Sol Andriani</span></h1>
          <h2>Desarrolladora web</h2>
          <p>
            Desarrollo sitios web <strong>modernos y funcionales</strong>, combinando
            <strong> diseño cuidado</strong> y <strong>estructura clara</strong>.
          </p>

          <button className="btn-contacto" onClick={() => setModalOpen(true)}>
            Trabajemos juntos
          </button>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/solandriani" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/solandriani" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <Contacto modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </section>
  );
}
