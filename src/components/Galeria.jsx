import React, { useState } from "react";
import "./Galeria.css";

export default function Galeria() {
  const imagenes = [
    { src: "/imagenes/suiza-1.jpg", alt: "Paisaje en Suiza 1" },
    { src: "/imagenes/suiza-2.jpg", alt: "Paisaje en Suiza 2" },
    { src: "/imagenes/suiza-3.jpg", alt: "Paisaje en Suiza 3" },
    { src: "/imagenes/paris-1.jpg", alt: "Paisaje en París 1" },
    { src: "/imagenes/paris-2.jpg", alt: "Paisaje en París 2" },
    { src: "/imagenes/londres-1.jpg", alt: "Paisaje en Londres 1" },
    { src: "/imagenes/londres-2.jpg", alt: "Paisaje en Londres 2" },
    { src: "/imagenes/londres-7.jpg", alt: "Paisaje en Londres 3" },
  ];

  const [activo, setActivo] = useState(false);
  const [index, setIndex] = useState(0);

  const abrirLightbox = (i) => {
    setIndex(i);
    setActivo(true);
    document.body.style.overflow = "hidden";
  };

  const cerrarLightbox = () => {
    setActivo(false);
    document.body.style.overflow = "";
  };

  const siguiente = () => setIndex((index + 1) % imagenes.length);
  const anterior = () => setIndex((index - 1 + imagenes.length) % imagenes.length);

  return (
    <section id="galeria" className="galeria-timmy">
      {/* ===== Título y subtítulo ===== */}
      <div className="galeria-header">
        <h2>Galería</h2>
        <p>Además de crear sitios web, me gusta viajar y capturar momentos a través de la fotografía.</p>
      </div>

      <div className="galeria-masonry">
        {imagenes.map((img, i) => (
          <div className="galeria-item" key={i} onClick={() => abrirLightbox(i)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {activo && (
        <div
          className="lightbox active"
          onClick={(e) => e.target.classList.contains("lightbox") && cerrarLightbox()}
        >
          <span className="cerrar" onClick={cerrarLightbox}>&times;</span>
          <img className="lightbox-img" src={imagenes[index].src} alt={imagenes[index].alt} />
          <a className="prev" onClick={(e) => { e.stopPropagation(); anterior(); }}>&#10094;</a>
          <a className="next" onClick={(e) => { e.stopPropagation(); siguiente(); }}>&#10095;</a>
        </div>
      )}
    </section>
  );
}
