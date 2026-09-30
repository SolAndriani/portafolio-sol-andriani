import React from 'react';
import './SobreMi.css';

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi seccion">
      <h2 className="subtitulo">Qué resuelvo</h2>

      <div className="sobre-mi-texto">
        <p>
          Hago agentes de IA que atienden por WhatsApp y saben cuándo dejar de
          hacerlo. La parte difícil casi nunca es que el bot conteste bien. Es lo
          otro: qué pasa cuando no sabe, quién se entera y cómo vuelve la
          conversación a su lugar.
        </p>

        <p>
          Por eso termino construyendo también la herramienta interna que usa el
          equipo. Alguien tiene que poder ver qué está pasando y meterse, y esa
          persona normalmente no es técnica.
        </p>

        <p>
          Del lado del backend trabajo con APIs REST, autenticación y bases
          relacionales y no relacionales. Cuando hay varios clientes sobre el mismo
          sistema, el aislamiento de datos lo resuelvo en la base.
        </p>

        <p>
          Y trato de dejar el sistema midiéndose solo. Sin números no sabés si el
          bot mejoró o si simplemente le escriben menos.
        </p>
      </div>
    </section>
  );
}
