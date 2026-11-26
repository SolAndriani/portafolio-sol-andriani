import React, { useEffect, useRef, useState } from "react";
import { useIdioma } from "../idioma";
import "./VisorImagen.css";

/* Abre en grande, sobre la página, las imágenes de los enlaces marcados con
   data-visor. Se cierra con Esc, con el botón o tocando afuera. Si se abre
   con Ctrl/Cmd o la rueda del mouse, el enlace funciona como siempre. */
export default function VisorImagen() {
  const dialogo = useRef(null);
  const [imagen, setImagen] = useState(null);
  const { idioma } = useIdioma();

  useEffect(() => {
    const alHacerClic = (e) => {
      const enlace = e.target.closest("a[data-visor]");
      if (!enlace || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      const img = enlace.querySelector("img");
      setImagen({
        src: enlace.getAttribute("href"),
        alt: img?.getAttribute("alt") || enlace.getAttribute("aria-label") || "",
      });
    };
    document.addEventListener("click", alHacerClic);
    return () => document.removeEventListener("click", alHacerClic);
  }, []);

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (imagen && !d.open) {
      d.showModal();
      document.documentElement.classList.add("visor-abierto");
      window.__lenis?.stop();
    }
  }, [imagen]);

  const alCerrar = () => {
    document.documentElement.classList.remove("visor-abierto");
    window.__lenis?.start();
    setImagen(null);
  };

  return (
    <dialog
      ref={dialogo}
      className="visor"
      aria-label={imagen?.alt || undefined}
      onClose={alCerrar}
      onClick={() => dialogo.current?.close()}
    >
      {imagen && <img src={imagen.src} alt={imagen.alt} />}
      <button
        type="button"
        className="visor-cerrar"
        aria-label={idioma === "en" ? "Close (Esc)" : "Cerrar (Esc)"}
        onClick={() => dialogo.current?.close()}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </dialog>
  );
}
