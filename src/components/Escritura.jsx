import React, { useEffect, useState } from "react";

/* La palabra del titular se escribe letra por letra, se borra y escribe
   la siguiente, como un asistente respondiendo. */
const ESCRIBIR = 75;
const BORRAR = 40;
const PAUSA = 1900;

export default function Escritura({ frases }) {
  const [indice, setIndice] = useState(0);
  const [texto, setTexto] = useState("");
  const [borrando, setBorrando] = useState(false);
  const sinMovimiento =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
          setTexto(
            borrando ? frase.slice(0, texto.length - 1) : frase.slice(0, texto.length + 1)
          ),
        borrando ? BORRAR : ESCRIBIR
      );
    }
    return () => clearTimeout(espera);
  }, [texto, borrando, indice, frases, sinMovimiento]);

  const visible = sinMovimiento ? frases[0] : texto;

  return (
    <span className="escritura">
      <span className="sr-only">{frases.join(", ")}</span>
      <span aria-hidden="true">
        {visible || "​"}
        <span className="escritura-cursor" />
      </span>
    </span>
  );
}
