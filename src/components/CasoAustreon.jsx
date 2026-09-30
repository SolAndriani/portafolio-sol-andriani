import React from "react";
import "./CasoAustreon.css";

const decisiones = [
  {
    titulo: "Aislamiento de datos por clínica",
    texto:
      "Cada clínica opera sobre la misma base pero solo alcanza a sus propios pacientes. El aislamiento se resuelve en la capa de datos, no en el frontend: aunque alguien manipule el cliente, no hay forma de leer conversaciones ajenas.",
  },
  {
    titulo: "Un solo estado para el bot y la persona",
    texto:
      "Cuando recepción toma el control, el bot se silencia en esa conversación y deja de responder. El motor de automatización consulta ese estado antes de cada mensaje, así que nunca hay dos voces escribiéndole al paciente al mismo tiempo.",
  },
  {
    titulo: "Ninguna conversación queda colgada",
    texto:
      "Si el equipo toma un chat y se olvida de devolverlo, el bot lo retoma solo a las 2 horas sin respuesta. Es la diferencia entre un traspaso que funciona en la demo y uno que sobrevive a un día real de trabajo.",
  },
  {
    titulo: "La ventana de 24 horas de WhatsApp",
    texto:
      "WhatsApp no permite escribirle a alguien que no escribió en las últimas 24 horas. En vez de dejar que el envío falle sin explicación, el panel detecta la ventana vencida y lo avisa antes de que la persona escriba el mensaje.",
  },
  {
    titulo: "Retención de datos por normativa",
    texto:
      "Los mensajes se eliminan automáticamente a los 30 días. Son conversaciones con datos de salud: la retención es un requisito legal, no una optimización de espacio.",
  },
  {
    titulo: "Acceso segmentado por rol",
    texto:
      "Las métricas se pueden abrir a perfiles de marketing sin darles acceso a ninguna conversación. Los números que ve Austreon están agregados y anonimizados, sin nombres ni teléfonos.",
  },
];

const metricas = [
  "Resolución automática",
  "Turnos y turnos fuera de horario",
  "Tiempo de respuesta del equipo",
  "Urgencias y cancelaciones",
  "Derivaciones por motivo",
];

export default function CasoAustreon() {
  return (
    <section id="caso-austreon" className="caso seccion">
      <header className="caso-header">
        <span className="caso-etiqueta">Caso de estudio</span>
        <h2 className="subtitulo">
          Traspaso humano en un bot de WhatsApp para clínicas dentales
        </h2>
        <p className="caso-intro">
          Un bot resuelve la mayoría de las consultas de una clínica, pero hay
          momentos en los que no debe seguir solo: una urgencia, un paciente que
          pide hablar con alguien, una pregunta fuera de su alcance. Construí el
          sistema que le permite a una persona de la clínica entrar a esa
          conversación de WhatsApp, responder y devolvérsela al bot — sin que el
          paciente note el cambio.
        </p>
      </header>

      <div className="caso-bloques">
        <article className="caso-bloque">
          <h3>El problema</h3>
          <p>
            Sin una salida hacia una persona, las conversaciones que el bot no
            puede resolver se pierden o terminan derivadas al celular personal de
            alguien de recepción. La clínica queda sin registro, sin métricas y
            sin control sobre qué se le respondió al paciente.
          </p>
        </article>

        <article className="caso-bloque">
          <h3>Cómo se dispara la derivación</h3>
          <p>
            Por dos caminos. El bot deriva solo cuando detecta una urgencia, un
            pedido explícito de hablar con alguien, que ningún horario disponible
            le sirve al paciente o una consulta que no sabe responder: avisa a
            recepción y marca el chat con el motivo. O interviene el equipo por
            decisión propia, viendo la conversación en vivo.
          </p>
        </article>

        <article className="caso-bloque">
          <h3>Qué ve el equipo</h3>
          <p>
            Un panel web con todos los chats de la clínica actualizándose en vivo,
            sin recargar. Cada conversación lleva etiquetas — turno reservado,
            urgencia, sin respuesta del bot — y filtros para llegar rápido a lo
            que importa: no leídos, piden persona, urgencias. Tomar control,
            responder y devolver al bot son tres clics.
          </p>
        </article>
      </div>

      <div className="caso-decisiones">
        <h3 className="caso-subtitulo">Decisiones técnicas</h3>
        <ul className="caso-grid">
          {decisiones.map((d) => (
            <li key={d.titulo} className="caso-card">
              <h4>{d.titulo}</h4>
              <p>{d.texto}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="caso-cierre">
        <div className="caso-cierre-col">
          <h3 className="caso-subtitulo">Qué mide</h3>
          <ul className="caso-metricas">
            {metricas.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <p className="caso-nota">
            Las derivaciones por motivo cierran el circuito: muestran por qué el
            bot tuvo que pasar cada chat a una persona, y con eso se decide qué
            mejorar del bot en la próxima iteración.
          </p>
        </div>

        <div className="caso-cierre-col">
          <h3 className="caso-subtitulo">Stack</h3>
          <ul className="caso-stack">
            <li><strong>n8n</strong> — orquestación de los bots y la lógica de derivación</li>
            <li><strong>Supabase</strong> — datos del panel y aislamiento por clínica</li>
            <li><strong>WhatsApp Business</strong> — canal de entrada y salida</li>
            <li><strong>React</strong> — panel de operación en tiempo real</li>
          </ul>
          <p className="caso-nota">
            El panel es una herramienta interna de las clínicas y requiere
            usuario, así que no es público.
          </p>
        </div>
      </div>
    </section>
  );
}
