import React, { useEffect, useState } from "react";
import "./Header.css";

const SECCIONES = [
  { id: "proyectos", texto: "Trabajo" },
  { id: "caso-austreon", texto: "Caso Austreon" },
  { id: "como-trabajo", texto: "Cómo trabajo" },
  { id: "contacto", texto: "Contacto" },
];

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolleado, setScrolleado] = useState(false);
  const [activa, setActiva] = useState("");

  // Sobre el hero el header va transparente; después toma fondo crema.
  useEffect(() => {
    const alScrollear = () => setScrolleado(window.scrollY > 80);
    alScrollear();
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, []);

  // Marca en el nav la sección que se está viendo.
  useEffect(() => {
    const nodos = SECCIONES.map(({ id }) => document.getElementById(id)).filter(
      Boolean
    );
    if (nodos.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visibles = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibles[0]) setActiva(visibles[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    nodos.forEach((n) => observador.observe(n));
    return () => observador.disconnect();
  }, []);

  return (
    <header className={`header ${scrolleado ? "header--fondo" : ""}`}>
      <div className="header-inner">
        <a className="header-marca" href="#presentacion" aria-label="Sol Andriani, ir al inicio">
          <span className="marca-copy" aria-hidden="true">©</span>
          <span className="marca-mask" aria-hidden="true">
            <span className="marca-track">
              <span>Code by Sol</span>
              <span>Sol Andriani</span>
            </span>
          </span>
        </a>

        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuAbierto((v) => !v)}
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        >
          <span className={`bar ${menuAbierto ? "open" : ""}`} />
          <span className={`bar ${menuAbierto ? "open" : ""}`} />
          <span className={`bar ${menuAbierto ? "open" : ""}`} />
        </button>

        <nav
          id="menu-principal"
          className={`header-nav ${menuAbierto ? "open" : ""}`}
          aria-label="Navegación principal"
        >
          {SECCIONES.map(({ id, texto }) => (
            <a
              key={id}
              className={`link ${activa === id ? "activa" : ""}`}
              href={`#${id}`}
              aria-current={activa === id ? "true" : undefined}
              onClick={() => setMenuAbierto(false)}
            >
              {texto}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
