import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contacto">
      <div className="iconos-contacto">
        {/* Gmail Web */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=solagustinaandriani2@gmail.com" 
          target="_blank" 
          rel="noreferrer"
          title="Enviar correo"
        >
          <i className="fas fa-envelope"></i>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/solandriani" 
          target="_blank" 
          rel="noreferrer"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/solandriani" 
          target="_blank" 
          rel="noreferrer"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>

      <p>© 2025 Sol Andriani</p>
    </footer>
  );
}
