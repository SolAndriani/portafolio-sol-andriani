import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/* Scroll suave como en dennissnellenberg.com. También suaviza los
   saltos de los links internos (#proyectos, #caso-austreon, etc.),
   dejando lugar para el header fijo. No se activa si el usuario pidió
   reducir el movimiento. */
export default function useScrollSuave() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      anchors: { offset: -80 },
    });

    window.__lenis = lenis;

    let id;
    const raf = (tiempo) => {
      lenis.raf(tiempo);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);
}
