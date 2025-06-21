import React from 'react';

export default function Footer() {
  return (
    <footer>
      <section id="contacto" className="seccion">
        <h2>Contacto</h2>
        <div className="iconos-contacto">
          <a href="https://mail.google.com/mail/?view=cm&to=solagustinaandriani@gmail.com" target="_blank" rel="noreferrer">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/solandriani" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/solandriani" target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </section>
      <p>©️ 2025 Sol Andriani</p>
    </footer>
  );
}