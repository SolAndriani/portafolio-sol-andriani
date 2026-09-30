import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
          <h2>Desarrolladora Full Stack · Automatización e IA</h2>
          <p>
            Construyo aplicaciones web <strong>completas y funcionales</strong>, desde 
            interfaces en React hasta sistemas con <strong>IA conversacional</strong> y{" "}
            <strong>automatización de procesos</strong>.
          </p>

        <div className="botones-presentacion">
  <button className="btn-contacto" onClick={() => setModalOpen(true)}>
    Trabajemos juntos
  </button>
</div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/solandriani" target="_blank" rel="noreferrer" aria-label="Perfil de LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/solandriani" target="_blank" rel="noreferrer" aria-label="Perfil de GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <Contacto modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </section>
  );
}