import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/imagenes/Logo-SOLution.png" alt="Logo SOLution" className="logo" />
        <span className="empresa">Sol Andriani</span>
      </div>

      <nav className="header-nav">
        <ul>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
