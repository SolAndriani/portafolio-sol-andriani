import React, { useEffect, useState } from "react";
import { useIdioma } from "../idioma";
import "./Header.css";

const SECCIONES = [
  { id: "proyectos", es: "Trabajo", en: "Work" },
  { id: "sobre-mi", es: "Sobre mí", en: "About" },
  { id: "contacto", es: "Contacto", en: "Contact" },
];

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { idioma, setIdioma } = useIdioma();
  const [scrolleado, setScrolleado] = useState(false);
  const [activa, setActiva] = useState("");

  // Sobre el hero el header va transparente; después toma fondo crema.
  useEffect(() => {
    const alScrollear = () => setScrolleado(window.scrollY > 80);
    alScrollear();
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, []);

  // Con el menú abierto (celular) la página de atrás no scrollea y
  // Escape lo cierra.
  useEffect(() => {
    if (!menuAbierto) return;
    const raiz = document.documentElement;
    const previo = raiz.style.overflow;
    raiz.style.overflow = "hidden";
    const alTeclear = (e) => {
      if (e.key === "Escape") setMenuAbierto(false);
    };
    window.addEventListener("keydown", alTeclear);
    return () => {
      raiz.style.overflow = previo;
      window.removeEventListener("keydown", alTeclear);
    };
  }, [menuAbierto]);

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
    <header className={`header ${scrolleado ? "header--fondo" : ""} ${menuAbierto ? "header--menu" : ""}`}>
      <div className="header-inner">
        <a className="header-marca" href="#presentacion" aria-label={idioma === "en" ? "Sol Andriani, back to top" : "Sol Andriani, ir al inicio"}>
          <span className="marca-copy" aria-hidden="true">©</span>
          <span className="marca-mask" aria-hidden="true">
            <span className="marca-track">
              <span>Sol Andriani</span>
              <span>Code by Sol</span>
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
          {SECCIONES.map(({ id, es, en }) => {
            const texto = idioma === "en" ? en : es;
            return (
            <a
              key={id}
              className={`link ${activa === id ? "activa" : ""}`}
              href={`#${id}`}
              aria-current={activa === id ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                setMenuAbierto(false);
                window.dispatchEvent(
                  new CustomEvent("cortina", { detail: { id, texto } })
                );
              }}
            >
              {texto}
            </a>
            );
          })}

          {/* Solo en el menú de celular: contacto al pie del panel */}
          <div className="header-nav-pie">
            <a className="header-nav-mail" href="mailto:solagustinaandriani@gmail.com">
              solagustinaandriani@gmail.com
            </a>
            <div className="header-nav-redes">
              <a href="https://www.linkedin.com/in/solandriani/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/SolAndriani" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href={idioma === "en" ? "/Sol-Andriani-CV-EN.pdf" : "/Sol-Andriani-CV.pdf"}
                target="_blank"
                rel="noreferrer"
              >
                {idioma === "en" ? "Download CV" : "Descargar CV"}
              </a>
            </div>
          </div>
        </nav>

        <div className="idioma" role="group" aria-label="Idioma / Language">
          <button
            type="button"
            className={idioma === "es" ? "activo" : ""}
            aria-pressed={idioma === "es"}
            onClick={() => setIdioma("es")}
          >
            ES
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            className={idioma === "en" ? "activo" : ""}
            aria-pressed={idioma === "en"}
            onClick={() => setIdioma("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
