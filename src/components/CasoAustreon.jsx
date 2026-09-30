import React from "react";
import "./CasoAustreon.css";

const decisiones = [
  {
    titulo: "Aislamiento de datos entre clientes",
    texto:
      "Varias clínicas operan sobre el mismo sistema y cada una alcanza solo a sus propios pacientes. El aislamiento está resuelto en la capa de datos, así que no depende de que el frontend se comporte bien.",
  },
  {
    titulo: "Un solo estado para el bot y la persona",
    texto:
      "Cuando alguien toma el control, el bot se silencia en esa conversación. El motor de automatización consulta ese estado antes de cada mensaje, así nunca hay dos voces escribiéndole al paciente al mismo tiempo.",
  },
  {
    titulo: "Ninguna conversación queda colgada",
    texto:
      "Si el equipo toma un chat y se olvida de devolverlo, el bot lo retoma solo después de un tiempo sin respuesta. Sin eso, un traspaso que anda bien en la demo se rompe en un día normal de trabajo.",
  },
  {
    titulo: "Los límites de la API de WhatsApp",
    texto:
      "WhatsApp no permite escribirle a alguien que no escribió en las últimas 24 horas. El panel detecta esa situación y la avisa antes de que la persona redacte el mensaje, para que el envío no falle sin explicación.",
  },
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
          conversación de WhatsApp, responder y devolvérsela al bot, sin que el
          paciente note el cambio.
        </p>
      </header>

      <div className="caso-bloques caso-bloques--dos">
        <article className="caso-bloque">
          <h3>El problema</h3>
          <p>
            Sin una salida hacia una persona, las conversaciones que el bot no
            puede resolver se pierden o terminan derivadas al celular personal de
            alguien de recepción. La clínica queda sin registro y sin control
            sobre qué se le respondió al paciente.
          </p>
        </article>

        <article className="caso-bloque">
          <h3>Qué construí</h3>
          <p>
            Un panel web donde el equipo ve las conversaciones en vivo, toma el
            control de una cuando hace falta, responde desde ahí y se la devuelve
            al bot al terminar. Los mensajes salen por el mismo número de siempre,
            así que del lado del paciente no cambia nada.
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

      <div className="caso-cierre caso-cierre--simple">
        <p className="caso-remate">
          El sistema mide su propio desempeño: cuánto resuelve el bot sin ayuda,
          cuánto tarda el equipo cuando interviene y por qué motivo hubo que
          derivar. Con eso se decide qué mejorar en la próxima iteración.
        </p>
        <p className="caso-nota">
          Construido con n8n para la orquestación, React para el panel y una base
          gestionada con las reglas de acceso en la capa de datos. El panel es una
          herramienta interna de las clínicas y requiere usuario, así que no es
          público.
        </p>
      </div>
    </section>
  );
}
