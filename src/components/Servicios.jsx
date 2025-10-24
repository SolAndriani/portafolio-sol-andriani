import React from 'react';
import './Servicios.css';

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Diseño y desarrollo web',
      descripcion:
        'Creo sitios web modernos y funcionales, adaptados a cada proyecto, con una estructura clara y navegación fácil de usar.',
    },
    {
      titulo: 'Optimización y mantenimiento',
      descripcion:
        'Me aseguro de que los sitios funcionen correctamente y estén actualizados, ofreciendo soporte y mejoras según sea necesario.',
    },
    {
      titulo: 'Asesoramiento digital',
      descripcion:
        'Brindo orientación para quienes buscan desarrollar su proyecto online de manera organizada y profesional.',
    },
  ];

  return (
    <section id="servicios" className="servicios seccion">
      <h2 className="subtitulo">Servicios</h2>
      <div className="servicios-contenedor">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
