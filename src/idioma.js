import React, { createContext, useContext, useEffect, useState } from "react";

/* Idioma del sitio (es / en). Se recuerda en el navegador y, la primera
   vez, se elige según el idioma del navegador del visitante. */
const IdiomaContext = createContext({ idioma: "es", setIdioma: () => {} });

function idiomaInicial() {
  try {
    const guardado = window.localStorage.getItem("idioma");
    if (guardado === "es" || guardado === "en") return guardado;
  } catch (e) {
    /* sin acceso a localStorage */
  }
  const nav = (navigator.language || "es").toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial);

  useEffect(() => {
    document.documentElement.lang = idioma;
    try {
      window.localStorage.setItem("idioma", idioma);
    } catch (e) {
      /* sin acceso a localStorage */
    }
  }, [idioma]);

  return <IdiomaContext.Provider value={{ idioma, setIdioma }}>{children}</IdiomaContext.Provider>;
}

export function useIdioma() {
  return useContext(IdiomaContext);
}

/* t("texto en español", "text in English") */
export function useT() {
  const { idioma } = useContext(IdiomaContext);
  return (es, en) => (idioma === "en" ? en : es);
}
