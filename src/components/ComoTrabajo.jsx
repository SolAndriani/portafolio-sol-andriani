import React from "react";
import "./ComoTrabajo.css";

const PASOS = [
  {
    titulo: "Entiendo el problema",
    texto: "Mapeo cómo trabaja el equipo hoy y dónde se pierde tiempo.",
  },
  {
    titulo: "Diseño el sistema",
    texto: "Decido qué resuelven reglas fijas y qué resuelve el modelo.",
  },
  {
    titulo: "Construyo y pruebo",
    texto:
      "Integraciones, datos, prompts y casos límite, antes de que lo use un cliente.",
  },
];

const STACK =
  "Python · JavaScript / TypeScript · React · Node.js · FastAPI · n8n · " +
  "OpenAI · Gemini · WhatsApp Cloud API · PostgreSQL · Supabase · MongoDB · " +
  "Airtable · Hetzner · Vercel";

export default function ComoTrabajo() {
  return (
    <section id="como-trabajo" className="trabajo seccion">
      <div className="seccion-titulo-wrap trabajo-intro">
        <span className="eyebrow">Cómo trabajo</span>
        <h2 className="trabajo-titulo">
          Primero el proceso, <span className="serif">después la IA.</span>
        </h2>
      </div>

      <div className="trabajo-lista">
        {PASOS.map(({ titulo, texto }) => (
          <div className="trabajo-fila" key={titulo}>
            <strong className="trabajo-fila-titulo">{titulo}</strong>
            <span className="trabajo-fila-texto">{texto}</span>
          </div>
        ))}

        <div className="trabajo-fila trabajo-fila--ultima">
          <strong className="trabajo-fila-titulo">Stack</strong>
          <span className="trabajo-fila-texto trabajo-stack">{STACK}</span>
        </div>
      </div>
    </section>
  );
}
