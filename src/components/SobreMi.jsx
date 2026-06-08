import React from 'react';
import './SobreMi.css';

export default function SobreMi() {
  const pasosTrabajo = [
    'Analizo cada proyecto desde cero: objetivo, usuario y funcionalidades clave.',
    'Diseño interfaces limpias, accesibles y fáciles de usar en cualquier dispositivo.',
    'Desarrollo el backend con APIs REST, autenticación y bases de datos relacionales y no relacionales.',
    'Integro automatizaciones e IA conversacional para optimizar procesos internos y atención al cliente.'
  ];

  return (
    <section id="sobre-mi" className="sobre-mi seccion">
      <h2 className="subtitulo">Cómo trabajo</h2>
      <div className="sobre-mi-contenedor">
        {pasosTrabajo.map((paso, index) => (
          <div key={index} className="trabajo-card">
            <span className="numero">{index + 1}.</span>
            <p>{paso}</p>
          </div>
        ))}
      </div>
    </section>
  );
}