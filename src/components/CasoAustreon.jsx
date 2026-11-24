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
    intro:
      "Soy la líder técnica de Austreon: diseñé la arquitectura, los flujos, el modelo de datos y los prompts. El sistema está en etapa de lanzamiento y hoy se puede ver en las dos demos.",
    demos: "Probá las demos:",
    abrir: "Leer el caso completo",
    cerrar: "Cerrar el caso",
    parrafos1: [
      "Diseñé asistentes de WhatsApp para clínicas que agendan turnos y responden consultas sin intervención. El problema aparece cuando el asistente no puede: una urgencia, alguien que insiste en hablar con una persona, o una pregunta que no sabe responder. Sin una forma ordenada de pasar esa conversación a alguien del equipo, termina en el celular de recepción o se pierde.",
      "Construí un panel donde el equipo ve las conversaciones en vivo y puede meterse en una cuando hace falta. Toma el control, responde y al terminar se la devuelve al asistente. Del lado del paciente no cambia nada, porque los mensajes salen por el mismo número.",
    ],
    resolver: "Qué hubo que resolver",
    parrafos2: [
      "Que el asistente y la persona no se pisen. Cuando alguien toma el control, el asistente tiene que callarse en esa conversación y solo en esa. Antes de contestar cada mensaje, consulta ese estado.",
      "Que nadie se olvide de devolver el chat. Si queda tomado, el paciente deja de recibir respuestas. Lo resolví con un vencimiento: si el equipo no responde en dos horas, el asistente retoma la conversación solo.",
      "Los límites de WhatsApp, que no dejan escribirle a alguien que no escribió en las últimas 24 horas. El panel avisa antes de que la persona redacte, así no se entera cuando el envío ya falló.",
      "Los datos de salud. Las conversaciones se borran solas a los 30 días y las métricas se guardan sin nombres ni teléfonos.",
    ],
    capturaWa:
      "Lo que ve la tutora en WhatsApp: manda un audio, elige un horario de la lista y el turno queda confirmado.",
    capturaWaAlt: "Conversación de WhatsApp con el asistente de Austreon Vet: audio, lista de horarios y turno confirmado",
    capturaPanel:
      "Lo que ve la clínica en el panel: la misma conversación en vivo, con la opción de tomar el control.",
    capturaPanelAlt: "Panel de la clínica con la conversación en vivo y el botón Tomar control",
    decisiones: "Decisiones técnicas",
    listaDecisiones: [
      {
        titulo: "El modelo no decide lo crítico",
        texto: "Agendar un turno o derivar una urgencia va por flujos fijos en n8n. El modelo entiende al paciente y redacta la respuesta.",
      },
      {
        titulo: "De LLaMA/Groq a OpenAI",
        texto: "Migré el motor conversacional después de comparar calidad de respuesta, latencia y costo con conversaciones de prueba.",
      },
      {
        titulo: "Cada clínica ve solo lo suyo",
        texto: "El aislamiento entre clínicas está resuelto en la base de datos, no librado a que el frontend filtre bien.",
      },
    ],
    mide: "Qué se mide",
    parrafos4: [
      "Dejé instrumentado el registro de sus propios números: cuánto resuelve el asistente solo, cuántos turnos se agendan fuera del horario de atención y por qué motivo derivó cada conversación (pidió una persona, no tenía la respuesta, urgencia, reclamo). Con eso se decide qué mejorar después.",
    ],
    flujo:
      "El flujo principal en n8n: entra el mensaje de WhatsApp, el agente de IA decide y usa herramientas para consultar y confirmar turnos, registrar el triage, notificar urgencias y escalar a una persona.",
    flujoAlt: "El agente de IA del asistente de Austreon en n8n, con sus herramientas",
    ampliar: "Ver el flujo completo ↗",
    verFlujo: "Ver el flujo en n8n ↗",
    nota: "Hecho con n8n, OpenAI, WhatsApp Cloud API, Airtable, JavaScript y Supabase. El panel es una herramienta interna y requiere usuario, así que no es público.",
  },
  en: {
    eyebrow: "Case study",
    titulo: "How an assistant works",
    tituloSerif: "from start to finish",
    intro:
      "I'm the technical lead at Austreon: I designed the architecture, the workflows, the data model and the prompts. The system is in its launch stage and can be seen today in the two demos.",
    demos: "Try the demos:",
    abrir: "Read the full case",
    cerrar: "Close the case",
    parrafos1: [
      "I designed WhatsApp assistants for clinics that book appointments and answer questions without human intervention. The problem appears when the assistant can't handle something: an urgency, someone who insists on talking to a person, or a question it can't answer. Without an orderly way to hand that conversation to someone on the team, it ends up on the front desk's phone or gets lost.",
      "I built a dashboard where the team sees conversations live and can step into one when needed. They take control, reply and, when they're done, hand it back to the assistant. Nothing changes for the patient, because messages come from the same number.",
    ],
    resolver: "What had to be solved",
    parrafos2: [
      "Keeping the assistant and the person from talking over each other. When someone takes control, the assistant has to stay quiet in that conversation, and only that one. Before replying to each message, it checks that state.",
      "Making sure nobody forgets to hand the chat back. If it stays taken, the patient stops getting replies. I solved it with an expiry: if the team doesn't reply within two hours, the assistant takes the conversation back on its own.",
      "WhatsApp's limits, which don't let you message someone who hasn't written in the last 24 hours. The dashboard warns before the person starts typing, so they don't find out after the message has already failed.",
      "Health data. Conversations are deleted automatically after 30 days and metrics are stored without names or phone numbers.",
    ],
    capturaWa:
      "What the pet owner sees on WhatsApp: sends a voice note, picks a time from the list and the appointment is confirmed.",
    capturaWaAlt: "WhatsApp conversation with the Austreon Vet assistant: voice note, list of times and confirmed appointment",
    capturaPanel:
      "What the clinic sees in the dashboard: the same conversation live, with the option to take over.",
    capturaPanelAlt: "Clinic dashboard with the live conversation and the Take control button",
    decisiones: "Technical decisions",
    listaDecisiones: [
      {
        titulo: "The model doesn't decide what's critical",
        texto: "Booking an appointment or escalating an urgency runs through fixed workflows in n8n. The model understands the patient and drafts the reply.",
      },
      {
        titulo: "From LLaMA/Groq to OpenAI",
        texto: "I migrated the conversational engine after comparing response quality, latency and cost with test conversations.",
      },
      {
        titulo: "Each clinic only sees its own data",
        texto: "Isolation between clinics is enforced in the database, not left to the frontend filtering correctly.",
      },
    ],
    mide: "What gets measured",
    parrafos4: [
      "I instrumented it to log its own numbers: how much the assistant resolves on its own, how many appointments are booked outside office hours and why each conversation was escalated (asked for a person, didn't have the answer, urgency, complaint). That data decides what to improve next.",
    ],
    flujo:
      "The main workflow in n8n: the WhatsApp message comes in, the AI agent decides and uses tools to check and confirm appointments, log triage, notify urgencies and escalate to a person.",
    flujoAlt: "The AI agent of the Austreon assistant in n8n, with its tools",
    ampliar: "View the full workflow ↗",
    verFlujo: "See the n8n workflow ↗",
    nota: "Built with n8n, OpenAI, WhatsApp Cloud API, Airtable, JavaScript and Supabase. The dashboard is an internal tool and requires a login, so it isn't public.",
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
        <p className="caso-intro">{tx.intro}</p>
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
          {abierto ? tx.cerrar : tx.abrir}{" "}
          <span aria-hidden="true">{abierto ? "↑" : "→"}</span>
        </button>
      </div>

      <div id="caso-completo" className="caso-completo" hidden={!abierto}>
        {tx.parrafos1.map((p) => (
          <p key={p}>{p}</p>
        ))}

        {/* Capturas reales de la demo de Austreon Vet */}
        <div className="caso-capturas">
          <div className="caso-capturas-grid">
            <figure className="caso-captura">
              <a href="/imagenes/caso-vet-whatsapp.webp" target="_blank" rel="noopener noreferrer">
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
              <a href="/imagenes/caso-vet-panel.webp" target="_blank" rel="noopener noreferrer">
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

        <h3>{tx.resolver}</h3>
        {tx.parrafos2.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h3>{tx.mide}</h3>
        {tx.parrafos4.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <p className="caso-nota">{tx.nota}</p>
      </div>
    </section>
  );
}
