import React, { useEffect, useState } from "react";
import "./Cortina.css";

/* Transición tipo "cortina" (como dennissnellenberg.com): al tocar un
   link del menú, un panel oscuro sube con el nombre de la sección,
   la página salta a esa sección y el panel sigue de largo hacia arriba.
   Se dispara con: window.dispatchEvent(new CustomEvent("cortina",
   { detail: { id, texto } })) */
const DURACION = 550;

function irA(id) {
  const destino = document.getElementById(id);
  if (!destino) return;
  const offset = -80;
  if (window.__lenis) {
    window.__lenis.scrollTo(destino, { offset, immediate: true, force: true });
  } else {
    const y = destino.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "auto" });
  }
  window.history.replaceState(null, "", `#${id}`);
}

export default function Cortina() {
  const [fase, setFase] = useState("oculta"); // oculta | entrando | saliendo
  const [texto, setTexto] = useState("");

  useEffect(() => {
    let timers = [];
    const alPedir = (e) => {
      const { id, texto: t } = e.detail || {};
      const sinMovimiento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (sinMovimiento) {
        irA(id);
        return;
      }
      timers.forEach(clearTimeout);
      setTexto(t || "");
      setFase("entrando");
      timers = [
        setTimeout(() => {
          irA(id);
          setFase("saliendo");
        }, DURACION + 150),
        setTimeout(() => setFase("oculta"), DURACION * 2 + 200),
      ];
    };
    window.addEventListener("cortina", alPedir);
    return () => {
      window.removeEventListener("cortina", alPedir);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className={`cortina cortina--${fase}`} aria-hidden="true">
      <span className="cortina-texto">
        <span className="cortina-punto" />
        {texto}
      </span>
    </div>
  );
}
