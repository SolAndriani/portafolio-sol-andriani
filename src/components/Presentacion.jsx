import React from "react";
import "./Presentacion.css";

export default function Presentacion() {
  return (
    <section id="presentacion" className="hero">
      {/* Todo el hero vive dentro de este contenedor: la foto se mide
          contra él y no contra la ventana, así el encuadre no cambia
          entre un monitor de 1024 y uno de 1920. */}
      <div className="hero-inner">
        <div className="hero-foto">
          <picture>
            {/* En celular la versión liviana; en desktop la vertical completa */}
            <source
              media="(max-width: 767px)"
              srcSet="/imagenes/sol-hero-mobile.webp"
            />
            <img
              src="/imagenes/sol-hero.webp"
              alt="Retrato de Sol Andriani"
              width="1440"
              height="1920"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        <div className="hero-fundido" aria-hidden="true" />

        <div className="hero-contenido">
          <p className="hero-estado u">
            <span className="hero-punto" aria-hidden="true" />
            Disponible para trabajo remoto
          </p>

          <h1 className="hero-titulo u u2">
            Construyo
            <br />
            <span className="words">
              <span>
                asistentes de IA
                <br />
                agentes que entienden
                <br />
                automatizaciones
                <br />
                asistentes de IA
              </span>
            </span>
            <br />
            que trabajan solos.
          </h1>

          <p className="hero-descripcion u u2">
            AI Engineer. Desarrollo agentes de IA, automatizaciones y
            aplicaciones full stack: del diseño del proceso al deploy.
          </p>

          <div className="hero-acciones u u3">
            <a className="btn btn--oscuro" href="#proyectos">
              Ver proyectos <span aria-hidden="true">→</span>
            </a>
            <a
              className="link hero-link"
              href="/Sol-Andriani-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Descargar CV
            </a>
            <a
              className="link hero-link"
              href="https://www.linkedin.com/in/solandriani/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="link hero-link"
              href="https://github.com/SolAndriani"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <span className="hero-scroll" aria-hidden="true">
          Scroll ↓
        </span>
      </div>
    </section>
  );
}
