import React from 'react';
import './SobreMi.css';

const capacidades = [
  {
    titulo: 'Atención automatizada que sabe cuándo parar',
    texto:
      'Bots de WhatsApp con IA que resuelven la mayoría de las consultas y detectan cuándo la conversación tiene que pasar a una persona: urgencias, pedidos explícitos o preguntas fuera de su alcance. El traspaso resuelto de punta a punta, no un "hablá con un humano" que no lleva a ningún lado.',
  },
  {
    titulo: 'El panel que el equipo usa todos los días',
    texto:
      'La automatización sola no alcanza: alguien tiene que poder ver qué está pasando, intervenir y volver atrás. Construyo la herramienta interna que hace eso posible, pensada para que la use gente que no es técnica.',
  },
  {
    titulo: 'Backend con las reglas del negocio adentro',
    texto:
      'APIs REST, autenticación y bases relacionales y no relacionales. Cuando hay varios clientes sobre el mismo sistema, el aislamiento de datos y la retención van en la capa de datos, donde no se pueden esquivar desde el cliente.',
  },
  {
    titulo: 'Métricas para decidir, no para decorar',
    texto:
      'Los números que importan son los que dicen dónde falla el sistema: por qué el bot tuvo que derivar, cuánto tarda el equipo en responder, qué se pierde fuera de horario. Con eso se decide qué mejorar en la próxima iteración.',
  },
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi seccion">
      <h2 className="subtitulo">Qué resuelvo</h2>
      <div className="sobre-mi-contenedor">
        {capacidades.map((cap) => (
          <article key={cap.titulo} className="trabajo-card">
            <h3>{cap.titulo}</h3>
            <p>{cap.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
