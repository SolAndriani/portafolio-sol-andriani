import { useEffect } from "react";

/* Títulos que "se destapan" desde abajo al llegar a cada sección
   (inspirado en landonorris.com). El contenido es visible por defecto:
   solo se oculta si el observer está funcionando, así nunca queda nada
   invisible si algo falla. */
const SELECTOR =
  "main section:not(.hero) h2, main section:not(.hero) .eyebrow, main .seccion-bajada";

export default function useRevelar() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const elementos = [...document.querySelectorAll(SELECTOR)];
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            // se observa el contenedor (el clip-path del título haría que
            // el título en sí nunca "intersecte")
            e.target
              .querySelectorAll(":scope > .revelar")
              .forEach((el) => el.classList.add("revelado"));
            observador.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    elementos.forEach((el) => {
      // lo que ya está en pantalla al cargar no se anima
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88) return;
      el.classList.add("revelar");
      if (el.classList.contains("eyebrow")) el.style.transitionDelay = "0s";
      else if (el.tagName === "H2") el.style.transitionDelay = "0.08s";
      else el.style.transitionDelay = "0.2s";
      if (el.parentElement) observador.observe(el.parentElement);
    });

    return () => observador.disconnect();
  }, []);
}
