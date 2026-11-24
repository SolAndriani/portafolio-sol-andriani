import { useEffect } from "react";

/* Efecto "magnético" (como dennissnellenberg.com): los botones y los
   links del menú se corren hacia el cursor cuando lo tenés encima y
   vuelven con un rebote suave al salir. Solo en dispositivos con mouse
   y si el usuario no pidió reducir el movimiento. */
const SELECTOR = ".btn";

export default function useMagnetico() {
  useEffect(() => {
    const conMouse = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!conMouse.matches || sinMovimiento.matches) return;

    const limpiezas = [];

    document.querySelectorAll(SELECTOR).forEach((el) => {
      const fuerza = el.classList.contains("btn") ? 0.35 : 0.25;

      const mover = (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transition = "transform 0.25s cubic-bezier(0.2, 0.7, 0.2, 1)";
        el.style.transform = `translate(${x * fuerza}px, ${y * fuerza}px)`;
      };

      const soltar = () => {
        el.style.transition = "transform 0.9s cubic-bezier(0.25, 1.6, 0.5, 1)";
        el.style.transform = "translate(0, 0)";
      };

      el.addEventListener("mousemove", mover);
      el.addEventListener("mouseleave", soltar);
      limpiezas.push(() => {
        el.removeEventListener("mousemove", mover);
        el.removeEventListener("mouseleave", soltar);
      });
    });

    return () => limpiezas.forEach((fn) => fn());
  }, []);
}
