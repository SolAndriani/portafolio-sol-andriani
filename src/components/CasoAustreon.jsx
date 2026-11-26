import React, { useState } from "react";
import { useIdioma } from "../idioma";
import "./CasoAustreon.css";

const PASOS = {
  es: [
    {
      numero: "01",
      titulo: "WhatsApp",
      texto: "El paciente escribe. Entra por la Cloud API de Meta.",
    },
    {
      numero: "02",
      titulo: "n8n",
      texto: "Orquesta el flujo y aplica las reglas fijas del negocio.",
    },
    {
      numero: "03",
      titulo: "OpenAI",
      texto: "Entiende la intención y redacta respuestas naturales.",
    },
    {
      numero: "04",
      titulo: "Panel del equipo",
      texto: "Si hace falta una persona, recepción toma la conversación.",
    },
  ],
  en: [
    {
      numero: "01",
      titulo: "WhatsApp",
      texto: "The patient writes in through Meta's Cloud API.",
    },
    {
      numero: "02",
      titulo: "n8n",
      texto: "Orchestrates the flow and applies the business's fixed rules.",
    },
    {
      numero: "03",
      titulo: "OpenAI",
      texto: "Understands the intent and writes natural replies.",
    },
    {
      numero: "04",
      titulo: "Team dashboard",
      texto: "When a person is needed, the front desk takes over the chat.",
    },
  ],
};

const TEXTOS = {
  es: {
    eyebrow: "Caso de estudio",
    titulo: "Cómo funciona un asistente",
    tituloSerif: "de principio a fin",
    demos: "Probá las demos:",
    abrir: "Leer el caso completo",
    cerrar: "Cerrar el caso",
    bloques: [
      {
        titulo: "El problema",
        parrafos: [
          "Los asistentes de WhatsApp agendan turnos y responden consultas solos. El problema es cuando no pueden, por una urgencia, alguien que pide hablar con una persona o una pregunta sin respuesta. Esa conversación terminaba en el celular de recepción o se perdía.",
        ],
      },
      {
        titulo: "La solución",
        parrafos: [
          "Un panel donde el equipo ve las conversaciones en vivo, toma el control de una, responde y se la devuelve al asistente. El paciente no nota nada, porque los mensajes salen por el mismo número.",
        ],
      },
      { capturas: true },
      {
        titulo: "Qué hubo que resolver",
        lista: [
          "El asistente se calla solo en la conversación que tomó una persona.",
          "Si el equipo no responde en dos horas, el asistente retoma el chat.",
          "El panel avisa si se cerró la ventana de 24 horas de WhatsApp antes de que alguien escriba.",
          "Las conversaciones se borran a los 30 días y las métricas no guardan nombres ni teléfonos.",
        ],
      },
      {
        titulo: "Qué se mide",
        parrafos: [
          "Cuánto resuelve el asistente solo, cuántos turnos se agendan fuera de horario y por qué se deriva cada conversación. Con esos números se decide qué mejorar.",
        ],
      },
    ],
    capturaWa: "La tutora manda un audio, elige un horario y el turno queda confirmado.",
    capturaWaAlt:
      "Conversación de WhatsApp con el asistente de Austreon Vet: audio, lista de horarios y turno confirmado",
    capturaPanel: "La clínica ve la misma conversación en vivo y puede tomar el control.",
    capturaPanelAlt: "Panel de la clínica con la conversación en vivo y el botón Tomar control",
    decisiones: "Decisiones técnicas",
    listaDecisiones: [
      {
        titulo: "El modelo no decide lo crítico",
        texto:
          "Agendar un turno o derivar una urgencia va por flujos fijos en n8n. El modelo entiende al paciente y redacta la respuesta.",
      },
      {
        titulo: "De LLaMA/Groq a OpenAI",
        texto:
          "Migré el motor conversacional después de comparar calidad de respuesta, latencia y costo con conversaciones de prueba.",
      },
      {
        titulo: "Cada clínica ve solo lo suyo",
        texto:
          "El aislamiento entre clínicas está resuelto en la base de datos, no librado a que el frontend filtre bien.",
      },
    ],
    flujo:
      "El flujo principal en n8n: entra el mensaje de WhatsApp, el agente de IA decide y usa herramientas para consultar y confirmar turnos, registrar el triage, notificar urgencias y escalar a una persona.",
    flujoAlt: "El agente de IA del asistente de Austreon en n8n, con sus herramientas",
    ampliar: "Ver el flujo completo ↗",
    verFlujo: "Ver el flujo en n8n ↗",
  },
  en: {
    eyebrow: "Case study",
    titulo: "How an assistant works",
    tituloSerif: "from start to finish",
    demos: "Try the demos:",
    abrir: "Read the full case",
    cerrar: "Close the case",
    bloques: [
      {
        titulo: "The problem",
        parrafos: [
          "The WhatsApp assistants book appointments and answer questions on their own. The problem is when they can't, because of an urgency, someone asking for a person or a question with no answer. That conversation ended up on the front desk's phone or got lost.",
        ],
      },
      {
        titulo: "The solution",
        parrafos: [
          "A dashboard where the team sees conversations live, takes over one, replies and hands it back to the assistant. The patient doesn't notice anything, because messages come from the same number.",
        ],
      },
      { capturas: true },
      {
        titulo: "What had to be solved",
        lista: [
          "The assistant goes quiet only in the conversation a person took over.",
          "If the team doesn't reply within two hours, the assistant takes the chat back.",
          "The dashboard warns when WhatsApp's 24-hour window has closed, before anyone types.",
          "Conversations are deleted after 30 days and metrics don't store names or phone numbers.",
        ],
      },
      {
        titulo: "What gets measured",
        parrafos: [
          "How much the assistant resolves on its own, how many appointments are booked after hours and why each conversation gets escalated. Those numbers decide what to improve next.",
        ],
      },
    ],
    capturaWa: "The pet owner sends a voice note, picks a time and the appointment is confirmed.",
    capturaWaAlt:
      "WhatsApp conversation with the Austreon Vet assistant: voice note, list of times and confirmed appointment",
    capturaPanel: "The clinic sees the same conversation live and can take over.",
    capturaPanelAlt: "Clinic dashboard with the live conversation and the Take control button",
    decisiones: "Technical decisions",
    listaDecisiones: [
      {
        titulo: "The model doesn't decide what's critical",
        texto:
          "Booking an appointment or escalating an urgency runs through fixed workflows in n8n. The model understands the patient and drafts the reply.",
      },
      {
        titulo: "From LLaMA/Groq to OpenAI",
        texto:
          "I migrated the conversational engine after comparing response quality, latency and cost with test conversations.",
      },
      {
        titulo: "Each clinic only sees its own data",
        texto:
          "Isolation between clinics is enforced in the database, not left to the frontend filtering correctly.",
      },
    ],
    flujo:
      "The main workflow in n8n: the WhatsApp message comes in, the AI agent decides and uses tools to check and confirm appointments, log triage, notify urgencies and escalate to a person.",
    flujoAlt: "The AI agent of the Austreon assistant in n8n, with its tools",
    ampliar: "View the full workflow ↗",
    verFlujo: "See the n8n workflow ↗",
  },
};

export default function CasoAustreon() {
  const [abierto, setAbierto] = useState(false);
  const { idioma } = useIdioma();
  const tx = TEXTOS[idioma];

  return (
    <section id="caso-austreon" className="caso">
      <div className="caso-header">
        <div className="seccion-titulo-wrap">
          <span className="eyebrow caso-eyebrow">{tx.eyebrow}</span>
          <h2 className="caso-titulo">
            {tx.titulo} <span className="serif">{tx.tituloSerif}</span>
          </h2>
        </div>
      </div>

      <ol className="caso-pasos">
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
        <span className="caso-demos">
          {tx.demos}{" "}
          <a
            className="link"
            href="https://dent.austreon.cl"
            target="_blank"
            rel="noopener noreferrer"
          >
            dent.austreon.cl
          </a>{" "}
          ·{" "}
          <a
            className="link"
            href="https://vet.austreon.cl"
            target="_blank"
            rel="noopener noreferrer"
          >
            vet.austreon.cl
          </a>
          <span aria-hidden="true"> · </span>
          <a
            className="link"
            data-visor
            href="/imagenes/caso-n8n-flujo-ordenado.webp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {tx.verFlujo}
          </a>
        </span>

        <button
          type="button"
          className="btn btn--claro"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="caso-completo"
        >
          {abierto ? tx.cerrar : tx.abrir} <span aria-hidden="true">{abierto ? "↑" : "→"}</span>
        </button>
      </div>

      <div id="caso-completo" className="caso-completo caso-completo--bloques" hidden={!abierto}>
        {tx.bloques.map((bloque) =>
          bloque.capturas ? (
            // Capturas reales de la demo de Austreon Vet
            <div className="caso-capturas caso-bloque--ancho" key="capturas">
              <div className="caso-capturas-grid">
                <figure className="caso-captura">
                  <a
                    data-visor
                    href="/imagenes/caso-vet-whatsapp.webp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/imagenes/caso-vet-whatsapp.webp"
                      alt={tx.capturaWaAlt}
                      width="1316"
                      height="816"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <figcaption>{tx.capturaWa}</figcaption>
                </figure>
                <figure className="caso-captura">
                  <a
                    data-visor
                    href="/imagenes/caso-vet-panel.webp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/imagenes/caso-vet-panel.webp"
                      alt={tx.capturaPanelAlt}
                      width="1600"
                      height="719"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <figcaption>{tx.capturaPanel}</figcaption>
                </figure>
              </div>
            </div>
          ) : (
            <div className="caso-bloque" key={bloque.titulo}>
              <h3>{bloque.titulo}</h3>
              {bloque.parrafos?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {bloque.lista && (
                <ul className="caso-lista">
                  {bloque.lista.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
