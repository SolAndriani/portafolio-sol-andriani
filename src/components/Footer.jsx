import React from "react";
import "./Footer.css";

const LINKEDIN = "https://www.linkedin.com/in/solandriani/";
const GITHUB = "https://github.com/SolAndriani";

export default function Footer() {
  return (
    <section id="contacto" className="contacto">
      <span className="eyebrow">Contacto</span>

      <h2 className="contacto-titulo">
        Trabajemos <span className="serif">juntos.</span>
      </h2>

      <div className="contacto-acciones">
        <a
          className="btn btn--oscuro"
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribime por LinkedIn <span aria-hidden="true">→</span>
        </a>
        <a
          className="btn btn--borde"
          href="/Sol-Andriani-CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Descargar CV
        </a>
      </div>

      <footer className="pie">
        <span>© {new Date().getFullYear()} Sol Andriani</span>
        <span className="pie-lugar">Córdoba, Argentina</span>
        <span className="pie-redes">
          <a
            className="link"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="link"
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
      </footer>
    </section>
  );
}
