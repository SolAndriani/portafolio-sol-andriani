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
            Trabajo en Austreon armando agentes de IA que atienden clínicas por
            WhatsApp. Antes de programar estudié Diagnóstico por Imágenes en la UNC.
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
