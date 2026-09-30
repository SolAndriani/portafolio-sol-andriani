import { useEffect, useRef } from "react";

const FOCUSABLES =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accesibilidad para diálogos modales:
 * - cierra con Escape
 * - atrapa el foco adentro mientras está abierto (Tab y Shift+Tab)
 * - bloquea el scroll del fondo
 * - devuelve el foco al elemento que abrió el modal
 *
 * Devuelve el ref que hay que poner en el contenedor del modal.
 */
export default function useModalAccesible(activo, cerrar) {
  const contenedorRef = useRef(null);
  const focoPrevioRef = useRef(null);
  const cerrarRef = useRef(cerrar);

  // Mantengo la última versión de `cerrar` sin reejecutar el efecto en cada render
  cerrarRef.current = cerrar;

  useEffect(() => {
    if (!activo) return undefined;

    focoPrevioRef.current = document.activeElement;
    const scrollBloqueado = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const visibles = () =>
      Array.from(contenedorRef.current?.querySelectorAll(FOCUSABLES) || []).filter(
        (el) => el.offsetParent !== null
      );

    // Foco inicial adentro del modal
    const inicial = visibles()[0] || contenedorRef.current;
    inicial?.focus?.();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        cerrarRef.current?.();
        return;
      }
      if (e.key !== "Tab") return;

      const els = visibles();
      if (els.length === 0) {
        e.preventDefault();
        return;
      }
      const primero = els[0];
      const ultimo = els[els.length - 1];

      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = scrollBloqueado;
      focoPrevioRef.current?.focus?.();
    };
  }, [activo]);

  return contenedorRef;
}
