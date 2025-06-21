import React from 'react';

export default function Presentacion() {
  return (
    <section id="presentacion">
      <div className="foto-lateral">
        <img src="/imagenes/foto sol.jpg" alt="Foto de Sol" />
      </div>
      <div className="texto-sobre-mi">
        <h1 className="presentacion">Soy Sol, desarrolladora web junior.</h1>
        <p className="subtitulo">
          Creo experiencias digitales claras y funcionales, mientras avanzo en mi desarrollo profesional.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/solandriani" target="_blank" aria-label="LinkedIn" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/solandriani" target="_blank" aria-label="GitHub" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
