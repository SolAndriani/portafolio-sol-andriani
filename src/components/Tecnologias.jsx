import React from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiFastapi,
  SiN8N,
  SiOpenai,
  SiGooglegemini,
  SiWhatsapp,
  SiAirtable,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiClaude,
  SiAnthropic,
  SiPhp,
  SiSqlite,
} from "react-icons/si";
import "./Tecnologias.css";

const HERRAMIENTAS = [
  { nombre: "Python", Icono: SiPython },
  { nombre: "JavaScript", Icono: SiJavascript },
  { nombre: "TypeScript", Icono: SiTypescript },
  { nombre: "React", Icono: SiReact },
  { nombre: "Node.js", Icono: SiNodedotjs },
  { nombre: "FastAPI", Icono: SiFastapi },
  { nombre: "PHP", Icono: SiPhp },
  { nombre: "n8n", Icono: SiN8N },
  { nombre: "OpenAI", Icono: SiOpenai },
  { nombre: "Claude API", Icono: SiAnthropic },
  { nombre: "Gemini", Icono: SiGooglegemini },
  { nombre: "WhatsApp Cloud API", Icono: SiWhatsapp },
  { nombre: "Airtable", Icono: SiAirtable },
  { nombre: "PostgreSQL", Icono: SiPostgresql },
  { nombre: "SQLite", Icono: SiSqlite },
  { nombre: "Supabase", Icono: SiSupabase },
  { nombre: "Vercel", Icono: SiVercel },
  { nombre: "Claude Code", Icono: SiClaude },
];

function Fila({ oculta }) {
  return HERRAMIENTAS.map(({ nombre, Icono }) => (
    <span className="tool" key={nombre} aria-hidden={oculta || undefined}>
      <Icono className="tool-icono" aria-hidden="true" />
      {nombre}
    </span>
  ));
}

export default function Tecnologias() {
  return (
    <section className="tools" aria-label="Herramientas con las que trabajo">
      <div className="mq">
        {/* La lista va dos veces: al desplazarse el 50% el bucle es invisible */}
        <Fila />
        <Fila oculta />
      </div>
    </section>
  );
}
