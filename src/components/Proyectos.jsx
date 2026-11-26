import React, { useState } from "react";
import { useIdioma } from "../idioma";
import "./Proyectos.css";

const ES = [
  {
    numero: "01",
    titulo: "Austreon Dent y Austreon Vet",
    descripcion:
      "Asistentes de WhatsApp para clínicas dentales y veterinarias: turnos, preguntas frecuentes, detección de urgencias y un panel para que el equipo tome la conversación.",
    rol: "Líder técnica: arquitectura, flujos, modelo de datos y prompts.",
    tags: ["n8n", "OpenAI", "WhatsApp\u00A0Cloud\u00A0API", "Supabase", "En lanzamiento"],
    tipo: "ancla",
    href: "#caso-austreon",
  },
  {
    numero: "02",
    titulo: "Licitaciones: de la oportunidad a la oferta",
    descripcion:
      "Sistema que revisa a diario unas 4.250 Compras Ágiles del Estado chileno, filtra las que calzan y, con IA, analiza las bases y redacta la cotización para aprobar y firmar.",
    rol: "Diseño y desarrollo completo: automatización, plataforma web, integración con IA y puesta en producción.",
    tags: ["n8n", "Claude\u00A0API", "PHP", "API REST", "Interno"],
    tipo: "ancla",
    href: "#caso-licitaciones",
  },
  {
    numero: "03",
    titulo: "Seguimiento comercial con cotización automática",
    descripcion:
      "Herramienta para seguir clientes potenciales con responsables y próximos pasos, que genera la cotización sola.",
    rol: "Diseño de la herramienta y automatización.",
    tags: ["n8n", "Airtable", "Interno"],
    tipo: "acordeon",
    detalle:
      "Problema: el seguimiento de clientes potenciales estaba disperso. Solución: una herramienta con responsables, próximos pasos y cotización generada automáticamente. Sistema interno, no público.",
  },
  {
    numero: "04",
    titulo: "Río Hondo",
    descripcion: "Sitio web desarrollado en UXnicorp.",
    tags: ["React", "UXnicorp"],
    tipo: "externo",
    href: "https://lnkd.in/dcs-_KHz",
  },
  {
    numero: "05",
    titulo: "Portfolio fotográfico",
    descripcion:
      "Sitio a medida para un fotógrafo: organiza las fotos por categoría, guarda las imágenes en Cloudinary y tiene un panel protegido para gestionar el contenido.",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    tipo: "externo",
    href: "https://biologofotos.vercel.app/",
  },
];

const EN = [
  {
    ...ES[0],
    titulo: "Austreon Dent & Austreon Vet",
    descripcion:
      "WhatsApp assistants for dental and veterinary clinics: appointments, FAQs, urgency detection and a dashboard so the team can take over the conversation.",
    rol: "Technical lead: architecture, workflows, data model and prompts.",
    tags: ["n8n", "OpenAI", "WhatsApp\u00A0Cloud\u00A0API", "Supabase", "Launching"],
  },
  {
    ...ES[1],
    titulo: "Tenders: from opportunity to offer",
    descripcion:
      "A system that reviews around 4,250 Chilean government Compras Ágiles every day, filters the ones that fit and, with AI, analyzes the tender documents and drafts the quote to approve and sign.",
    rol: "End-to-end design and development: automation, web platform, AI integration and production rollout.",
    tags: ["n8n", "Claude\u00A0API", "PHP", "REST API", "Internal"],
  },
  {
    ...ES[2],
    titulo: "Sales pipeline with automatic quotes",
    descripcion:
      "A tool to track leads with owners and next steps, which generates the quote automatically.",
    rol: "Tool design and automation.",
    tags: ["n8n", "Airtable", "Internal"],
    detalle:
      "Problem: lead tracking was scattered. Solution: a tool with owners, next steps and automatically generated quotes. Internal system, not public.",
  },
  {
    ...ES[3],
    descripcion: "Website built at UXnicorp.",
  },
  {
    ...ES[4],
    titulo: "Photography portfolio",
    descripcion:
      "Custom website for a photographer: organizes photos by category, stores images on Cloudinary and has a protected dashboard to manage the content.",
  },
];

function Cuerpo({ numero, titulo, descripcion, rol, tags, flecha }) {
  const { idioma } = useIdioma();
  return (
    <>
      <span className="row-numero">{numero}</span>
      <div className="row-texto">
        <strong className="row-titulo">{titulo}</strong>
        <span className="row-descripcion">{descripcion}</span>
        {rol && (
          <span className="row-rol">
            <span className="row-rol-label">{idioma === "en" ? "My role" : "Mi rol"}</span>
            {rol}
          </span>
        )}
      </div>
      <div className="row-tags">
        {tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <span className="arrow" aria-hidden="true">
        {flecha}
      </span>
    </>
  );
}

function Fila({ proyecto, ultimo }) {
  const [abierto, setAbierto] = useState(false);
  const { idioma } = useIdioma();
  const { numero, tipo, href, detalle } = proyecto;
  const clase = `row row--${tipo} ${ultimo ? "row--ultimo" : ""}`;
  const panelId = `proyecto-${numero}-detalle`;

  // Sistemas internos sin link público: se despliegan en el lugar.
  if (tipo === "acordeon") {
    return (
      <>
        <button
          type="button"
          className={`${clase} ${abierto ? "row--abierta" : ""}`}
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls={panelId}
        >
          <Cuerpo {...proyecto} flecha="→" />
        </button>
        <div
          id={panelId}
          className="row-panel"
          hidden={!abierto}
          role="region"
          aria-label={`${idioma === "en" ? "Details:" : "Detalle de"} ${proyecto.titulo}`}
        >
          <p>{detalle}</p>
        </div>
      </>
    );
  }

  // Link externo: pestaña nueva y flecha en diagonal.
  if (tipo === "externo") {
    return (
      <a className={clase} href={href} target="_blank" rel="noopener noreferrer">
        <Cuerpo {...proyecto} flecha="↗" />
      </a>
    );
  }

  // Ancla interna: baja al caso de estudio.
  return (
    <a className={clase} href={href}>
      <Cuerpo {...proyecto} flecha="→" />
    </a>
  );
}

export default function Proyectos() {
  const { idioma } = useIdioma();
  const en = idioma === "en";
  const todos = en ? EN : ES;
  // Los tres proyectos principales van en la lista; los sitios web más
  // simples quedan en una línea discreta al final.
  const proyectos = todos.filter((p) => p.tipo !== "externo");
  const otros = todos.filter((p) => p.tipo === "externo");

  return (
    <section id="proyectos" className="proyectos seccion">
      <div className="seccion-header">
        <div className="seccion-titulo-wrap">
          <span className="eyebrow">{en ? "Work" : "Trabajo"}</span>
          <h2 className="seccion-titulo">
            {en ? "Selected" : "Proyectos"}{" "}
            <span className="serif">{en ? "projects" : "seleccionados"}</span>
          </h2>
        </div>
      </div>

      <div className="proyectos-lista">
        {proyectos.map((p, i) => (
          <Fila key={p.numero} proyecto={p} ultimo={i === proyectos.length - 1} />
        ))}
      </div>

      <p className="proyectos-otros">
        <span>{en ? "Other web work:" : "Otros trabajos web:"}</span>
        {otros.map((p, i) => (
          <React.Fragment key={p.numero}>
            {i > 0 && <span aria-hidden="true"> · </span>}
            <a className="link" href={p.href} target="_blank" rel="noopener noreferrer">
              {p.titulo} ↗
            </a>
          </React.Fragment>
        ))}
      </p>
    </section>
  );
}
