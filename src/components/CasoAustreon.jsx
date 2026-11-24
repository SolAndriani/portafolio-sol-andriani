import React, { useState } from "react";
import "./CasoAustreon.css";

const PASOS = [
  {
    numero: "01",
    titulo: "WhatsApp",
    texto: "El paciente escribe. Entra por la Cloud API de Meta.",
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
];

export default function CasoAustreon() {
  const [abierto, setAbierto] = useState(false);

  return (
    <section id="caso-austreon" className="caso">
      <div className="caso-header">
        <div className="seccion-titulo-wrap">
          <span className="eyebrow caso-eyebrow">Caso de estudio</span>
          <h2 className="caso-titulo">
            Cómo funciona un asistente{" "}
            <span className="serif">de punta a punta</span>
          </h2>
        </div>
        <p className="caso-intro">
          Soy la líder técnica de Austreon: diseñé la arquitectura, los flujos,
          el modelo de datos y los prompts. Las reglas críticas, como agendar o
          detectar urgencias, van por flujos fijos; el modelo interpreta y
          redacta. El sistema está en etapa de lanzamiento y hoy se puede ver en
          las dos demos.
        </p>
      </div>

      <ol className="caso-pasos">
        {PASOS.map(({ numero, titulo, texto }) => (
          <li className="step" key={numero}>
            <span className="step-numero">{numero}</span>
            <strong className="step-titulo">{titulo}</strong>
            <span className="step-texto">{texto}</span>
          </li>
        ))}
      </ol>

      <div className="caso-pie">
        <span className="caso-demos">
          Probá las demos:{" "}
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
        </span>

        <button
          type="button"
          className="btn btn--claro"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="caso-completo"
        >
          {abierto ? "Cerrar el caso" : "Leer el caso completo"}{" "}
          <span aria-hidden="true">{abierto ? "↑" : "→"}</span>
        </button>
      </div>

      <div id="caso-completo" className="caso-completo" hidden={!abierto}>
        <p>
          Diseñé asistentes de WhatsApp para clínicas que agendan turnos y
          responden consultas sin intervención. El problema aparece cuando el
          asistente no puede: una urgencia, alguien que insiste en hablar con
          una persona, o una pregunta que no sabe responder. Sin una forma
          ordenada de pasar esa conversación a alguien del equipo, termina en el
          celular de recepción o se pierde.
        </p>

        <p>
          Construí un panel donde el equipo ve las conversaciones en vivo y
          puede meterse en una cuando hace falta. Toma el control, responde y al
          terminar se la devuelve al asistente. Del lado del paciente no cambia
          nada, porque los mensajes salen por el mismo número.
        </p>

        <h3>Qué hubo que resolver</h3>

        <p>
          Que el asistente y la persona no se pisen. Cuando alguien toma el
          control, el asistente tiene que callarse en esa conversación y solo en
          esa. Antes de contestar cada mensaje, consulta ese estado.
        </p>

        <p>
          Que nadie se olvide de devolver el chat. Si queda tomado, el paciente
          deja de recibir respuestas. Lo resolví con un vencimiento: si el
          equipo no responde en dos horas, el asistente retoma la conversación
          solo.
        </p>

        <p>
          El sistema tiene que soportar varias clínicas a la vez, y cada una
          tiene que ver únicamente a sus pacientes. Eso no podés dejarlo librado
          a que el frontend filtre bien: lo resolví en la base de datos.
        </p>

        <p>
          Los límites de WhatsApp, que no dejan escribirle a alguien que no
          escribió en las últimas 24 horas. El panel avisa antes de que la
          persona redacte, así no se entera cuando el envío ya falló.
        </p>

        <p>
          Los datos de salud. Las conversaciones se borran solas a los 30 días y
          las métricas se guardan sin nombres ni teléfonos.
        </p>

        <h3>Decisiones técnicas</h3>

        <p>
          El motor conversacional empezó con LLaMA sobre Groq. Lo migré a OpenAI
          después de comparar calidad de respuesta, latencia y costo con
          conversaciones de prueba.
        </p>

        <p>
          El modelo no decide todo. Los pasos que no pueden fallar, como agendar
          un turno o derivar una urgencia, van por flujos fijos en n8n, y el
          modelo se usa para entender lo que escribe el paciente y redactar la
          respuesta.
        </p>

        <h3>Qué se mide</h3>

        <p>
          Dejé instrumentado el registro de sus propios números: cuánto resuelve
          el asistente solo, cuántos turnos se agendan fuera del horario de
          atención y por qué motivo derivó cada conversación (pidió una persona,
          no tenía la respuesta, urgencia, reclamo). Con eso se decide qué
          mejorar después.
        </p>

        <p className="caso-nota">
          Hecho con n8n, OpenAI, WhatsApp Cloud API, Airtable, JavaScript y
          Supabase. El panel es una herramienta interna y requiere usuario, así
          que no es público.
        </p>
      </div>
    </section>
  );
}
