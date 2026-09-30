import React from "react";
import "./CasoAustreon.css";

export default function CasoAustreon() {
  return (
    <section id="caso-austreon" className="caso seccion">
      <header className="caso-header">
        <span className="caso-etiqueta">Caso de estudio</span>
        <h2 className="subtitulo">
          Traspaso humano en un bot de WhatsApp para clínicas dentales
        </h2>
      </header>

      <div className="caso-texto">
        <p>
          Los bots de WhatsApp de las clínicas resuelven casi todas las consultas
          solos. El problema aparece cuando no pueden: una urgencia, o alguien que
          insiste en hablar con una persona. Antes de esto, esas conversaciones
          terminaban en el celular de alguien de recepción o directamente se
          perdían.
        </p>

        <p>
          Armé un panel donde el equipo de la clínica ve las conversaciones y
          puede meterse en una cuando hace falta. Toma el control, responde, y al
          terminar se la devuelve al bot. Del lado del paciente no cambia nada,
          porque los mensajes salen por el mismo número de siempre.
        </p>

        <h3>Lo que costó</h3>

        <p>
          Que el bot y la persona no se pisen. Cuando alguien toma el control, el
          bot tiene que callarse en esa conversación y solo en esa. Termina
          consultando ese estado antes de contestar cada mensaje.
        </p>

        <p>
          Que nadie se olvide de devolver el chat. Pasa, y si queda tomado el
          paciente no recibe más respuestas. Lo resolví con un reintento: si el
          equipo no contesta por un rato, el bot retoma la conversación solo.
        </p>

        <p>
          Varias clínicas sobre el mismo sistema. Cada una tiene que ver
          únicamente a sus pacientes, y eso no podés dejarlo librado a que el
          frontend filtre bien. Está resuelto en la base de datos.
        </p>

        <p>
          Y después están los límites de WhatsApp, que no te deja escribirle a
          alguien que no escribió en las últimas 24 horas. El panel avisa antes de
          que la persona redacte, así no se entera cuando el envío ya falló.
        </p>

        <p>
          El sistema guarda sus propios números para saber cuánto resuelve el bot
          solo y por qué motivo tuvo que derivar. Con eso se decide qué tocar
          después.
        </p>

        <p className="caso-cierre-contacto">
          Si tenés algo parecido entre manos, escribime a{" "}
          <a href="mailto:solagustinaandriani@gmail.com">
            solagustinaandriani@gmail.com
          </a>
          .
        </p>

        <p className="caso-nota">
          Hecho con n8n, React y una base gestionada. El panel es una herramienta
          interna de las clínicas y requiere usuario, así que no es público.
        </p>
      </div>
    </section>
  );
}
