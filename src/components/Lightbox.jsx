// src/components/Lightbox.jsx
import React from 'react';

export default function Lightbox({ imagen, cerrar, anterior, siguiente }) {
  return (
    <div
      className="lightbox active"
      aria-hidden="false"
      onClick={(e) => e.target.classList.contains('lightbox') && cerrar()}
    >
      <span className="cerrar" onClick={cerrar} aria-label="Cerrar">&times;</span>
      <img className="lightbox-img" src={imagen.src} alt={imagen.alt} />
      <a className="prev" onClick={anterior} aria-label="Imagen anterior">&#10094;</a>
      <a className="next" onClick={siguiente} aria-label="Imagen siguiente">&#10095;</a>
    </div>
  );
}
