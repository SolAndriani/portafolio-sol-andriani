import React from 'react';
import './SobreMi.css';

export default function SobreMi() {
  const pasosTrabajo = [
    'Organizo cada proyecto de manera clara y eficiente.',
    'Diseño interfaces limpias y fáciles de usar.',
    'Aseguro compatibilidad y buen rendimiento en todas las pantallas.',
    'Integro funcionalidades que facilitan la gestión de clientes y procesos internos.'
  ];

  return (
    <section id="sobre-mi" className="sobre-mi seccion">
      <h2 className="subtitulo">Cómo trabajo</h2>
      <div className="sobre-mi-contenedor">
        {pasosTrabajo.map((paso, index) => (
          <div key={index} className="trabajo-card">
            <span className="numero">{index + 1}.</span> {/* Punto agregado */}
            <p>{paso}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
