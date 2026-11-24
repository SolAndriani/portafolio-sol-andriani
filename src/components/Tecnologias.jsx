import React from "react";
import "./Tecnologias.css";

const grupos = [
  { rol: "Lenguajes", items: "Python · JavaScript / TypeScript" },
  { rol: "Desarrollo", items: "React · Node.js · FastAPI · APIs REST · Git" },
  { rol: "IA y agentes", items: "OpenAI · Gemini · Agentes conversacionales · Prompting" },
  { rol: "Automatización", items: "n8n · WhatsApp Cloud API (Meta) · Airtable · Webhooks" },
  { rol: "Datos", items: "PostgreSQL · Supabase · MongoDB" },
  { rol: "Despliegue", items: "Hetzner · Vercel · Netlify" },
  { rol: "Desarrollo con IA", items: "Claude Code · Codex · GitHub Copilot" },
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
