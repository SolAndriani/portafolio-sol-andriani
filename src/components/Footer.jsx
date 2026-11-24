import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { useT } from "../idioma";
import "./Footer.css";

const LINKEDIN = "https://www.linkedin.com/in/solandriani/";
const GITHUB = "https://github.com/SolAndriani";
const EMAIL = "solagustinaandriani@gmail.com";

export default function Footer() {
  const t = useT();

  return (
    <section id="contacto" className="contacto">
      <span className="eyebrow">{t("Contacto", "Contact")}</span>

      <h2 className="contacto-titulo">
        {t("Trabajemos", "Let's work")}{" "}
        <span className="serif">{t("juntos.", "together.")}</span>
      </h2>

      <a className="contacto-mail link" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>

      <div className="contacto-acciones">
        <a
          className="btn btn--oscuro"
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Escribime por LinkedIn", "Message me on LinkedIn")}{" "}
          <span aria-hidden="true">→</span>
        </a>
        <a
          className="btn btn--borde"
          href={t("/Sol-Andriani-CV.pdf", "/Sol-Andriani-CV-EN.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          {t("Descargar CV", "Download CV")}
        </a>
      </div>

      <footer className="pie">
        <span>© {new Date().getFullYear()} Sol Andriani</span>
        <span className="pie-redes">
          <a className="pie-icono" href={`mailto:${EMAIL}`} aria-label="Email">
            <FaEnvelope aria-hidden="true" />
          </a>
          <a
            className="pie-icono"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          aria-label="LinkedIn">
            <FaLinkedinIn aria-hidden="true" />
          </a>
          <a
            className="pie-icono"
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </a>
        </span>
      </footer>
    </section>
  );
}
