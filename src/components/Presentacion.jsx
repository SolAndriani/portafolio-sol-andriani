import React from "react";
import { useT, useIdioma } from "../idioma";
import Escritura from "./Escritura";
import "./Presentacion.css";

const FRASES = {
  es: ["asistentes de IA", "agentes inteligentes", "automatizaciones"],
  en: ["AI assistants", "smart agents", "automations"],
};

export default function Presentacion() {
  const t = useT();
  const { idioma } = useIdioma();

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
              alt={t("Retrato de Sol Andriani", "Portrait of Sol Andriani")}
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

          <p className="hero-etiqueta u">
            <span className="hero-linea" aria-hidden="true" />
            {t("AI Engineer · IA y automatización", "AI Engineer · AI & automation")}
          </p>

          <h1 className="hero-titulo u u2">
            {t("Construyo", "I build")}
            <br />
            <Escritura frases={FRASES[idioma]} />
            <br />
            {t("que ahorran horas de\u00A0trabajo.", "that save hours of\u00A0work.")}
          </h1>

          <p className="hero-descripcion u u2">
            {t(
              "Desarrollo agentes de IA, automatizaciones y aplicaciones full stack, de la idea a producción.",
              "I develop AI agents, automations and full stack applications, from idea to production."
            )}
          </p>

          <div className="hero-acciones u u3">
            <a className="btn btn--oscuro" href="#proyectos">
              {t("Ver proyectos", "View projects")} <span aria-hidden="true">→</span>
            </a>
            <a
              className="link hero-link"
              href={t("/Sol-Andriani-CV.pdf", "/Sol-Andriani-CV-EN.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              {t("Descargar CV", "Download CV")}
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
          {t("Scroll", "Scroll")} ↓
        </span>
      </div>
    </section>
  );
}
