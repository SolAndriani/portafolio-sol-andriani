import React, { useState } from 'react';

export default function Galeria() {
  const imagenes = [
    { src: "/imagenes/suiza-1.jpg", alt: "Paisaje en Suiza 1" },
    { src: "/imagenes/suiza-2.jpg", alt: "Paisaje en Suiza 2" },
    { src: "/imagenes/suiza-3.jpg", alt: "Paisaje en Suiza 3" },
    { src: "/imagenes/paris-1.jpg", alt: "Paisaje en París 1" },
    { src: "/imagenes/paris-2.jpg", alt: "Paisaje en París 2" },
    { src: "/imagenes/paris-3.jpg", alt: "Paisaje en París 3" },
    { src: "/imagenes/londres-1.jpg", alt: "Paisaje en Londres 1" },
    { src: "/imagenes/londres-2.jpg", alt: "Paisaje en Londres 2" },
    { src: "/imagenes/londres-10.jpg", alt: "Paisaje en Londres 3" },
  ];

  const [activo, setActivo] = useState(false);
  const [index, setIndex] = useState(0);

  const abrirLightbox = (i) => {
    setIndex(i);
    setActivo(true);
    document.body.style.overflow = 'hidden';
  };

  const cerrarLightbox = () => {
    setActivo(false);
    document.body.style.overflow = '';
  };

  const siguiente = () => setIndex((index + 1) % imagenes.length);
  const anterior = () => setIndex((index - 1 + imagenes.length) % imagenes.length);

  return (
    <section id="galeria">
      <header className="galeria-header">
        <h2>Fotos</h2>
        
      </header>
      <div className="galeria-fotos">
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="galeria-item"
            onClick={() => abrirLightbox(i)}
          />
        ))}
      </div>

      {activo && (
        <div className="lightbox active" aria-hidden={!activo} onClick={(e) => e.target.classList.contains('lightbox') && cerrarLightbox()}>
          <span className="cerrar" onClick={cerrarLightbox} aria-label="Cerrar">&times;</span>
          <img
            className="lightbox-img"
            src={imagenes[index].src}
            alt={imagenes[index].alt}
          />
          <a className="prev" onClick={anterior} aria-label="Imagen anterior">&#10094;</a>
          <a className="next" onClick={siguiente} aria-label="Imagen siguiente">&#10095;</a>
        </div>
      )}
    </section>
  );
}
