import React from "react";
import { useIdioma } from "../idioma";
import "./ComoTrabajo.css";

const PASOS = {
  es: [
    {
      titulo: "Entiendo el problema",
      texto: "Analizo cómo trabaja hoy el equipo y dónde se pierde tiempo.",
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
  ],
  en: [
    {
      titulo: "I understand the problem",
      texto: "I look at how the team works today and where time gets lost.",
    },
    {
      titulo: "I design the system",
      texto: "I decide what fixed rules handle and what the model handles.",
    },
    {
      titulo: "I build and test",
      texto:
        "Integrations, data, prompts and edge cases, before a client uses it.",
    },
  ],
};

const STACK = {
  es: [
    { grupo: "IA", items: "OpenAI · Gemini · Claude Code" },
    { grupo: "Automatización", items: "n8n · WhatsApp Cloud API · Webhooks" },
    {
      grupo: "Desarrollo",
      items: "Python · JavaScript / TypeScript · React · Node.js · FastAPI",
    },
    { grupo: "Datos", items: "PostgreSQL · Supabase · MongoDB · Airtable" },
    { grupo: "Deploy", items: "Hetzner · Vercel" },
    { grupo: "Aprendiendo", items: "AWS" },
  ],
  en: [
    { grupo: "AI", items: "OpenAI · Gemini · Claude Code" },
    { grupo: "Automation", items: "n8n · WhatsApp Cloud API · Webhooks" },
    {
      grupo: "Development",
      items: "Python · JavaScript / TypeScript · React · Node.js · FastAPI",
    },
    { grupo: "Data", items: "PostgreSQL · Supabase · MongoDB · Airtable" },
    { grupo: "Deploy", items: "Hetzner · Vercel" },
    { grupo: "Learning", items: "AWS" },
  ],
};

export default function ComoTrabajo() {
  const { idioma } = useIdioma();
  const en = idioma === "en";

  return (
    <section id="sobre-mi" className="trabajo seccion">
      <div className="seccion-titulo-wrap trabajo-intro">
        <span className="eyebrow">{en ? "About" : "Sobre mí"}</span>
        <h2 className="trabajo-titulo">
          {en ? "Full stack developer," : "Desarrolladora full stack,"}{" "}
          <span className="serif">
            {en
              ? "focused on AI and automation."
              : "enfocada en IA y automatización."}
          </span>
        </h2>
        <p className="trabajo-bio">
          {en
            ? "I create AI agents and automations that answer questions, organize information and take care of repetitive tasks."
            : "Me dedico a crear agentes de IA y automatizaciones que responden consultas, ordenan información y se ocupan de las tareas repetitivas."}
        </p>
        <p className="trabajo-bio">
          {en
            ? "What I enjoy most is understanding how a team works and finding where technology can save them time. I aim for simple solutions that the team understands and that hold up over time."
            : "Lo que más me gusta es entender cómo trabaja un equipo y descubrir dónde la tecnología le puede ahorrar tiempo. Busco soluciones simples, que el equipo entienda y que se puedan mantener en el tiempo."}
        </p>
      </div>

      <div className="trabajo-lista">
        {PASOS[idioma].map(({ titulo, texto }) => (
          <div className="trabajo-fila" key={titulo}>
            <strong className="trabajo-fila-titulo">{titulo}</strong>
            <span className="trabajo-fila-texto">{texto}</span>
          </div>
        ))}

        <div className="trabajo-fila trabajo-fila--ultima">
          <strong className="trabajo-fila-titulo">Stack</strong>
          <span className="trabajo-fila-texto trabajo-stack">
            {STACK[idioma].map(({ grupo, items }) => (
              <span className="stack-linea" key={grupo}>
                <span className="stack-grupo">{grupo}</span>
                <span>{items}</span>
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
