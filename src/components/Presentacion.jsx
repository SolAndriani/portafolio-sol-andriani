import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Presentacion.css";

export default function Presentacion() {
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
          <h2>AI Engineer · Automatización de agentes de IA & Full Stack</h2>
          <p>
            Construyo sistemas que conectan IA con procesos reales de negocio:
            agentes conversacionales en WhatsApp, flujos automáticos con n8n y
            dashboards de gestión en tiempo real.
          </p>
          <p>
            Mi formación en Diagnóstico por Imágenes me da además una mirada
            distinta a la hora de trabajar en proyectos vinculados a salud,
            entendiendo tanto la parte clínica como la técnica.
          </p>

          <p className="hero-cv">
            <a href="/Sol-Andriani-CV.pdf" target="_blank" rel="noreferrer">
              Descargar CV (PDF)
            </a>
          </p>

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
    </section>
  );
}
