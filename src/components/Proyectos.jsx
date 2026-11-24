import React, { useState } from "react";
import "./Proyectos.css";

const proyectos = [
  {
    numero: "01",
    titulo: "Austreon Dent y Austreon Vet",
    descripcion:
      "Líder técnica del producto. Asistentes de WhatsApp para clínicas dentales y veterinarias: turnos, preguntas frecuentes, detección de urgencias y un panel para que el equipo tome la conversación.",
    tags: ["n8n", "OpenAI", "WhatsApp Cloud API", "Supabase", "En lanzamiento"],
    tipo: "ancla",
    href: "#caso-austreon",
  },
  {
    numero: "02",
    titulo: "Oportunidades en Mercado Público",
    descripcion:
      "Automatización que descarga a diario unas 4.250 Compras Ágiles del Estado chileno, las filtra por palabras clave del área comercial y le envía al equipo un resumen de oportunidades.",
    tags: ["n8n", "API REST", "En puesta en marcha"],
    tipo: "acordeon",
    detalle:
      "Problema: el equipo comercial revisaba a mano las compras públicas y se perdía oportunidades. Solución: un flujo en n8n consulta la API de Mercado Público todos los días, filtra por palabras clave que administra el área comercial y envía un resumen. Mi rol: diseño e integración de la automatización. Sistema interno, no público.",
  },
  {
    numero: "03",
    titulo: "Seguimiento comercial con cotización automática",
    descripcion:
      "Herramienta para seguir clientes potenciales con responsables y próximos pasos, que genera la cotización sola.",
    tags: ["n8n", "Airtable"],
    tipo: "acordeon",
    detalle:
      "Problema: el seguimiento de clientes potenciales estaba disperso. Solución: una herramienta con responsables, próximos pasos y cotización generada automáticamente. Mi rol: diseño y automatización. Sistema interno, no público.",
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
    descripcion: "Sitio para un fotógrafo.",
    tags: ["React", "Vercel"],
    tipo: "externo",
    href: "https://biologofotos.vercel.app/",
  },
];

function Cuerpo({ numero, titulo, descripcion, tags, flecha }) {
  return (
    <>
      <span className="row-numero">{numero}</span>
      <div className="row-texto">
        <strong className="row-titulo">{titulo}</strong>
        <span className="row-descripcion">{descripcion}</span>
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
          aria-label={`Detalle de ${proyecto.titulo}`}
        >
          <p>{detalle}</p>
        </div>
      </>
    );
  }

  // Link externo: pestaña nueva y flecha en diagonal.
  if (tipo === "externo") {
    return (
      <a
        className={clase}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
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
  return (
    <section id="proyectos" className="proyectos seccion">
      <div className="seccion-header">
        <div className="seccion-titulo-wrap">
          <span className="eyebrow">Trabajo</span>
          <h2 className="seccion-titulo">
            Proyectos <span className="serif">seleccionados</span>
          </h2>
        </div>
        <span className="seccion-bajada">
          IA, automatización y desarrollo web. Sistemas que uso o construí para
          equipos reales.
        </span>
      </div>

      <div className="proyectos-lista">
        {proyectos.map((p, i) => (
          <Fila
            key={p.numero}
            proyecto={p}
            ultimo={i === proyectos.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
