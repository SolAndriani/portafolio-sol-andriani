import React from "react";
import "./Tecnologias.css";

const HERRAMIENTAS = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "FastAPI",
  "n8n",
  "OpenAI",
  "Gemini",
  "WhatsApp Cloud API",
  "Airtable",
  "PostgreSQL",
  "Supabase",
  "Vercel",
  "Claude Code",
];

function Fila() {
  return HERRAMIENTAS.map((h) => (
    <React.Fragment key={h}>
      <span className="tool">{h}</span>
      <span className="tool-punto" aria-hidden="true">
        ·
      </span>
    </React.Fragment>
  ));
}

export default function Tecnologias() {
  return (
    <section className="tools" aria-label="Herramientas con las que trabajo">
      <div className="mq">
        {/* La lista va dos veces: al desplazarse el 50% el bucle es invisible */}
        <Fila />
        <Fila />
      </div>
    </section>
  );
}
