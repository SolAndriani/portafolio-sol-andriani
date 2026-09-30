import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const EMAIL = 'solagustinaandriani@gmail.com';

export default function Footer() {
  return (
    <footer id="contacto">
      <a className="footer-email" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>

      <div className="iconos-contacto">
        <a href={`mailto:${EMAIL}`} title="Enviar correo" aria-label="Enviar correo">
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/solandriani"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          aria-label="Perfil de LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/solandriani"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          aria-label="Perfil de GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Sol Andriani</p>
    </footer>
  );
}
