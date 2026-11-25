import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

/* La palabra del titular se escribe letra por letra, se borra y escribe
   la siguiente, como un asistente respondiendo. */
const ESCRIBIR = 75;
const BORRAR = 40;
const PAUSA = 1900;

export default function Escritura({ frases }) {
  const raiz = useRef(null);
  const medidor = useRef(null);
  const [escala, setEscala] = useState(1);
  const [indice, setIndice] = useState(0);
  const [texto, setTexto] = useState("");
  const [borrando, setBorrando] = useState(false);
  const sinMovimiento =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // al cambiar de idioma, arrancar de cero
  useEffect(() => {
    setIndice(0);
    setTexto("");
    setBorrando(false);
  }, [frases]);

  useEffect(() => {
    if (sinMovimiento) return;
    const frase = frases[indice % frases.length];
    let espera;
    if (!borrando && texto === frase) {
      espera = setTimeout(() => setBorrando(true), PAUSA);
    } else if (borrando && texto === "") {
      setBorrando(false);
      setIndice((i) => (i + 1) % frases.length);
    } else {
      espera = setTimeout(
        () =>
          setTexto(borrando ? frase.slice(0, texto.length - 1) : frase.slice(0, texto.length + 1)),
        borrando ? BORRAR : ESCRIBIR,
      );
    }
    return () => clearTimeout(espera);
  }, [texto, borrando, indice, frases, sinMovimiento]);

  /* Si la frase más larga no entra en el ancho del titular (pasa en
     celulares), se achica solo esta palabra lo justo para que entre en
     una línea. Así no se corta ni salta de línea mientras se escribe. */
  useLayoutEffect(() => {
    const ajustar = () => {
      const el = raiz.current;
      const med = medidor.current;
      if (!el || !med) return;
      const disponible = el.parentElement.clientWidth;
      let mayor = 0;
      frases.forEach((f) => {
        med.textContent = f;
        mayor = Math.max(mayor, med.getBoundingClientRect().width);
      });
      med.textContent = "";
      const cursor = 12;
      const nueva = mayor + cursor > disponible ? disponible / (mayor + cursor) : 1;
      setEscala(Math.floor(nueva * 1000) / 1000);
    };
    ajustar();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajustar);
    window.addEventListener("resize", ajustar);
    return () => window.removeEventListener("resize", ajustar);
  }, [frases]);

  const visible = sinMovimiento ? frases[0] : texto;

  return (
    <span
      className="escritura"
      ref={raiz}
      style={escala < 1 ? { fontSize: `${escala}em` } : undefined}
    >
      {/* Medidor invisible con la misma tipografía (sin escalar) */}
      <span
        ref={medidor}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          fontSize: escala < 1 ? `${1 / escala}em` : undefined,
        }}
      />
      <span className="sr-only">{frases.join(", ")}</span>
      <span aria-hidden="true">
        {visible || "​"}
        <span className="escritura-cursor" />
      </span>
    </span>
  );
}
