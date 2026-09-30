import React from "react";
import "./CasoAustreon.css";

export default function CasoAustreon() {
  return (
    <section id="caso-austreon" className="caso seccion">
      <header className="caso-header">
        <span className="caso-etiqueta">Caso de estudio</span>
        <h2 className="subtitulo">
          Traspaso humano en bots de WhatsApp para clínicas
        </h2>
      </header>

      <div className="caso-texto">
        <p>
          Armé bots de WhatsApp para clínicas que agendan
          turnos y responden consultas solos. El problema aparece cuando el bot no
          puede: una urgencia, alguien que insiste en hablar con una persona, o una
          pregunta que no sabe responder. Sin una forma ordenada de pasarle esa
          conversación a alguien del equipo, termina en el celular de recepción o se
          pierde.
        </p>

        <p>
          Armé un panel donde el equipo de cada clínica ve sus conversaciones en
          vivo y puede meterse en una cuando hace falta. Toma el control, responde y
          al terminar se la devuelve al bot. Del lado del paciente no cambia nada,
          porque los mensajes salen por el mismo número de siempre.
        </p>

        <h3>Qué hubo que resolver</h3>

        <p>
          Que el bot y la persona no se pisen. Cuando alguien toma el control, el
          bot tiene que callarse en esa conversación y solo en esa. Antes de
          contestar cada mensaje, consulta ese estado.
        </p>

        <p>
          Que nadie se olvide de devolver el chat. Pasa, y si queda tomado, el
          paciente no recibe más respuestas. Lo resolví con un vencimiento: si el
          equipo no responde en dos horas, el bot retoma la conversación solo.
        </p>

        <p>
          Varias clínicas sobre el mismo sistema. Cada una tiene que ver únicamente
          a sus pacientes, y eso no podés dejarlo librado a que el frontend filtre
          bien. Está resuelto en la base de datos.
        </p>

        <p>
          Los límites de WhatsApp, que no te deja escribirle a alguien que no
          escribió en las últimas 24 horas. El panel avisa antes de que la persona
          redacte, así no se entera cuando el envío ya falló.
        </p>

        <p>
          Los datos de salud. Las conversaciones se borran solas a los 30 días y las
          métricas se guardan sin nombres ni teléfonos.
        </p>

        <h3>Qué se mide</h3>

        <p>
          El sistema guarda sus propios números: cuánto resuelve el bot solo,
          cuántos turnos consigue fuera del horario de atención y por qué motivo
          tuvo que derivar cada conversación (pidió una persona, no tenía la
          respuesta, urgencia, reclamo). Con eso se decide qué mejorar después.
        </p>

        <p className="caso-nota">
          Hecho con n8n, JavaScript y Supabase. El panel es una herramienta interna
          de las clínicas y requiere usuario, así que no es público.
        </p>
      </div>
    </section>
  );
}
