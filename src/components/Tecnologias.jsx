import React from "react";
import "./Tecnologias.css";

const grupos = [
  { rol: "Lenguajes", items: "Python · JavaScript / TypeScript" },
  { rol: "Desarrollo", items: "React · Node.js · FastAPI · APIs REST · Git" },
  { rol: "IA y agentes", items: "LLMs (Groq / LLaMA) · Agentes conversacionales" },
  { rol: "Automatización", items: "n8n · WhatsApp Business API · Twilio · Airtable · Webhooks" },
  { rol: "Datos", items: "PostgreSQL · Supabase · MongoDB" },
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias seccion">
      <h2 className="subtitulo">Con qué trabajo</h2>
      <dl className="tec-lista">
        {grupos.map((g) => (
          <div className="tec-fila" key={g.rol}>
            <dt>{g.rol}</dt>
            <dd>{g.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
