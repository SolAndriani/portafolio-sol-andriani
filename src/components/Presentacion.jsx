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
            src="/imagenes/foto-sol.webp" 
            alt="Sol Andriani, desarrolladora web" 
            className="foto-sol"
          />
        </div>

        <div className="texto-presentacion">
          <h1><span>Sol Andriani</span></h1>
          <h2>Desarrolladora Full Stack · Automatización con IA</h2>
          <p>
            Construyo sistemas de <strong>atención automatizada por WhatsApp</strong>:
            el bot que responde, el panel donde el equipo toma el control cuando hace
            falta una persona, y las <strong>métricas</strong> que muestran qué
            mejorar. Hoy en producción, con clínicas usándolo todos los días.
          </p>

        <div className="botones-presentacion">
  <button className="btn-contacto" onClick={() => setModalOpen(true)}>
    Trabajemos juntos
  </button>
  <a className="btn-secundario" href="#caso-austreon">
    Ver un caso en detalle
  </a>
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