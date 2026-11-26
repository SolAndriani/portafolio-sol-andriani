import React, { useState } from "react";
import { useIdioma } from "../idioma";
import "./CasoAustreon.css";
import "./CasoLicitaciones.css";

/* Capturas y video del modo prueba (sin datos reales). Mientras estén
   vacíos no se muestra nada; para sumarlos, agregar los archivos en
   public/imagenes y completar la lista:
   { src: "/imagenes/licitaciones-tablero.webp", ancho: 1600, alto: 900,
     es: "Epígrafe", en: "Caption", altEs: "...", altEn: "..." } */
const CAPTURAS = [];
const VIDEO = null; // { src: "/imagenes/licitaciones.mp4", poster: "/imagenes/licitaciones-poster.webp" }

const PASOS = {
  es: [
    {
      numero: "01",
      titulo: "Búsqueda automática",
      texto:
        "n8n consulta la API de Mercado Público cada mañana (con reintentos si falla), filtra por palabras clave y envía las oportunidades por correo.",
    },
    {
      numero: "02",
      titulo: "Del correo a la plataforma",
      texto: "El botón del correo abre la oferta ya precargada con los datos de la compra.",
    },
    {
      numero: "03",
      titulo: "Análisis con IA",
      texto:
        "Claude lee las bases, arma la ficha, evalúa la viabilidad con un puntaje y desglosa los requisitos en un checklist.",
    },
    {
      numero: "04",
      titulo: "Revisión técnica",
      texto: "El área técnica marca cada requisito: cumple, parcial o no cumple.",
    },
    {
      numero: "05",
      titulo: "Cotización",
      texto:
        "La IA redacta la propuesta técnica y la matriz de cumplimiento, y revisa que no queden compromisos abiertos.",
    },
    {
      numero: "06",
      titulo: "Aprobación",
      texto:
        "Administración aprueba y firma, y se generan el PDF y el Word con timbre, folio y código de verificación.",
    },
  ],
  en: [
    {
      numero: "01",
      titulo: "Automatic search",
      texto:
        "n8n queries the Mercado Público API every morning (with retries if it fails), filters by keywords and emails the opportunities.",
    },
    {
      numero: "02",
      titulo: "From email to platform",
      texto: "The button in the email opens the offer already prefilled with the purchase data.",
    },
    {
      numero: "03",
      titulo: "AI analysis",
      texto:
        "Claude reads the tender documents, builds the summary, scores viability and breaks the requirements down into a checklist.",
    },
    {
      numero: "04",
      titulo: "Technical review",
      texto: "The technical team marks each requirement: meets, partial or doesn't meet.",
    },
    {
      numero: "05",
      titulo: "Quote",
      texto:
        "The AI drafts the technical proposal and the compliance matrix, and checks that no open commitments are left.",
    },
    {
      numero: "06",
      titulo: "Approval",
      texto:
        "Administration approves and signs, and the PDF and Word files are generated with stamp, folio number and verification code.",
    },
  ],
};

const TEXTOS = {
  es: {
    eyebrow: "Caso de estudio",
    titulo: "Licitaciones:",
    tituloSerif: "de la oportunidad a la oferta",
    decisiones: "Decisiones técnicas",
    listaDecisiones: [
      {
        titulo: "La IA corre a través de n8n",
        texto:
          "El hosting compartido corta los procesos de más de 30 segundos y el análisis tarda de 1 a 3 minutos. La plataforma deja el pedido, n8n consulta a Claude y devuelve el resultado, y la página lo va consultando.",
      },
      {
        titulo: "La IA sugiere, la persona decide",
        texto:
          "Claude desglosa los requisitos y redacta la cotización, pero el área técnica marca cada requisito y administración aprueba y firma antes de generar los documentos.",
      },
      {
        titulo: "Ingreso sin contraseñas",
        texto:
          "Un código de 6 dígitos llega al correo de la empresa, vence en 10 minutos y admite hasta 5 intentos. Los permisos por rol se controlan en el servidor.",
      },
    ],
    estado: "Herramienta interna, en uso en Austreon. No es pública.",
    abrir: "Leer el caso completo",
    cerrar: "Cerrar el caso",
    bloques: [
      {
        titulo: "El problema",
        parrafos: [
          "Austreon se presenta a Compras Ágiles de Mercado Público. Revisar las compras a mano y armar cada cotización desde cero llevaba horas, y todo el proceso dependía de una sola persona.",
        ],
      },
      {
        titulo: "La solución",
        parrafos: [
          "Cuatro pasos, cada uno a cargo de un rol: técnica revisa, comercial cotiza y sube la oferta, y administración aprueba y firma. Al final se descarga la carpeta en ZIP y la oferta queda como ofertada, adjudicada o no adjudicada.",
          "En la primera prueba real, el análisis detectó 43 requisitos técnicos en unos 2 minutos.",
        ],
      },
      {
        titulo: "Tecnología",
        lista: [
          "Frontend en HTML, CSS y JavaScript, sin frameworks. Lee y genera PDF, Word y Excel en el navegador.",
          "Backend en PHP y SQLite, con API propia.",
          "n8n para la búsqueda diaria, los códigos de ingreso, las alertas y las llamadas a Claude.",
        ],
      },
      {
        titulo: "Seguridad y operación",
        lista: [
          "Permisos por rol controlados en el servidor.",
          "Respaldo diario y aviso por correo si algo falla.",
          "Tope diario de uso de la IA por persona.",
        ],
      },
      {
        titulo: "Mi rol",
        parrafos: [
          "Diseño y desarrollo completo: arquitectura, frontend, backend, automatizaciones con n8n, integración con IA y puesta en producción.",
        ],
      },
      {
        titulo: "Resultado",
        parrafos: [
          "En uso en Austreon. El equipo preparó, aprobó y presentó una oferta dentro del plazo, con la revisión y la aprobación hechas en minutos.",
        ],
      },
    ],
    nota: "Las imágenes son del modo prueba, sin datos reales.",
  },
  en: {
    eyebrow: "Case study",
    titulo: "Tenders:",
    tituloSerif: "from opportunity to offer",
    decisiones: "Technical decisions",
    listaDecisiones: [
      {
        titulo: "The AI runs through n8n",
        texto:
          "The shared hosting kills processes that take over 30 seconds, and the analysis takes 1 to 3 minutes. The platform leaves the request, n8n calls Claude and returns the result, and the page polls for it.",
      },
      {
        titulo: "The AI suggests, the person decides",
        texto:
          "Claude breaks down the requirements and drafts the quote, but the technical team marks each requirement and administration approves and signs before the documents are generated.",
      },
      {
        titulo: "Passwordless login",
        texto:
          "A 6-digit code is sent to the company email, expires in 10 minutes and allows up to 5 attempts. Role permissions are enforced on the server.",
      },
    ],
    estado: "Internal tool, in use at Austreon. Not public.",
    abrir: "Read the full case",
    cerrar: "Close the case",
    bloques: [
      {
        titulo: "The problem",
        parrafos: [
          "Austreon bids on Compras Ágiles on Mercado Público. Reviewing purchases by hand and building every quote from scratch took hours, and the whole process depended on a single person.",
        ],
      },
      {
        titulo: "The solution",
        parrafos: [
          "Four steps, each owned by a role: technical reviews, sales quotes and submits the offer, and administration approves and signs. At the end the folder is downloaded as a ZIP and the offer is marked as submitted, awarded or not awarded.",
          "In the first real test, the analysis found 43 technical requirements in about 2 minutes.",
        ],
      },
      {
        titulo: "Technology",
        lista: [
          "Frontend in HTML, CSS and JavaScript, no frameworks. Reads and generates PDF, Word and Excel in the browser.",
          "Backend in PHP and SQLite, with its own API.",
          "n8n for the daily search, login codes, alerts and the calls to Claude.",
        ],
      },
      {
        titulo: "Security and operations",
        lista: [
          "Role permissions enforced on the server.",
          "Daily backup and an email alert if something fails.",
          "Daily AI usage cap per person.",
        ],
      },
      {
        titulo: "My role",
        parrafos: [
          "End-to-end design and development: architecture, frontend, backend, n8n automations, AI integration and production rollout.",
        ],
      },
      {
        titulo: "Result",
        parrafos: [
          "In use at Austreon. The team prepared, approved and submitted an offer on time, with the review and approval done in minutes.",
        ],
      },
    ],
    nota: "The images come from test mode, with no real data.",
  },
};

export default function CasoLicitaciones() {
  const [abierto, setAbierto] = useState(false);
  const { idioma } = useIdioma();
  const tx = TEXTOS[idioma];
  const en = idioma === "en";
  const hayMedios = CAPTURAS.length > 0 || VIDEO;

  return (
    <section id="caso-licitaciones" className="caso caso--licitaciones">
      <div className="caso-header">
        <div className="seccion-titulo-wrap">
          <span className="eyebrow caso-eyebrow">{tx.eyebrow}</span>
          <h2 className="caso-titulo">
            {tx.titulo} <span className="serif">{tx.tituloSerif}</span>
          </h2>
        </div>
      </div>

      <ol className="caso-pasos caso-pasos--seis">
        {PASOS[idioma].map(({ numero, titulo, texto }) => (
          <li className="step" key={numero}>
            <span className="step-numero">{numero}</span>
            <strong className="step-titulo">{titulo}</strong>
            <span className="step-texto">{texto}</span>
          </li>
        ))}
      </ol>

      <div className="caso-decisiones">
        <h3 className="caso-decisiones-titulo">{tx.decisiones}</h3>
        <ul className="caso-decisiones-lista">
          {tx.listaDecisiones.map(({ titulo, texto }) => (
            <li key={titulo}>
              <strong>{titulo}</strong>
              <span>{texto}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="caso-pie">
        <span className="caso-demos">{tx.estado}</span>

        <button
          type="button"
          className="btn btn--claro"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="caso-licitaciones-completo"
        >
          {abierto ? tx.cerrar : tx.abrir} <span aria-hidden="true">{abierto ? "↑" : "→"}</span>
        </button>
      </div>

      <div
        id="caso-licitaciones-completo"
        className="caso-completo caso-completo--bloques"
        hidden={!abierto}
      >
        {tx.bloques.map(({ titulo, parrafos, lista }, i) => (
          <React.Fragment key={titulo}>
            <div className="caso-bloque">
              <h3>{titulo}</h3>
              {parrafos?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {lista && (
                <ul className="caso-lista">
                  {lista.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {i === 1 && hayMedios && (
              <div className="caso-capturas caso-bloque--ancho">
                {VIDEO && (
                  <video
                    className="caso-video"
                    src={VIDEO.src}
                    poster={VIDEO.poster}
                    controls
                    muted
                    playsInline
                    preload="none"
                  />
                )}
                {CAPTURAS.length > 0 && (
                  <div className="caso-capturas-grid caso-capturas-grid--pares">
                    {CAPTURAS.map((c) => (
                      <figure className="caso-captura" key={c.src}>
                        <a data-visor href={c.src} target="_blank" rel="noopener noreferrer">
                          <img
                            src={c.src}
                            alt={en ? c.altEn : c.altEs}
                            width={c.ancho}
                            height={c.alto}
                            loading="lazy"
                            decoding="async"
                          />
                        </a>
                        <figcaption>{en ? c.en : c.es}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                <p className="caso-nota">{tx.nota}</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
