import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src="/imagenes/Logo-SOL.png" alt="Logo SOL" className="logo" />
        <span>Sol Andriani</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#presentacion" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#tecnologias" onClick={() => setMenuOpen(false)}>Tecnologías</a></li>
          <li><a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#galeria" onClick={() => setMenuOpen(false)}>Galería</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}