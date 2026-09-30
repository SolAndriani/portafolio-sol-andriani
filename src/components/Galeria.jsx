import React, { useCallback, useState } from "react";
import useModalAccesible from "../hooks/useModalAccesible";
import "./Galeria.css";

const imagenes = [
  { base: "suiza-1", alt: "Lago suizo en un día nublado, con casas y embarcaderos de madera sobre la orilla arbolada en otoño" },
  { base: "suiza-2", alt: "Cascada cayendo por un acantilado rocoso, con un chalet de madera y un árbol otoñal en primer plano" },
  { base: "suiza-3", alt: "Pico rocoso de los Alpes suizos asomando detrás de un bosque de pinos, con cielo azul despejado" },
  { base: "paris-1", alt: "Fachada del Panteón de París en contrapicado, con sus columnas corintias y el frontón esculpido" },
  { base: "paris-2", alt: "La Torre Eiffel de frente en un día nublado, con los anillos olímpicos bajo el arco" },
  { base: "londres-1", alt: "Hilera de casas victorianas pintadas en tonos pastel en una calle de Londres" },
  { base: "londres-2", alt: "Cabina telefónica roja frente a la Abadía de Westminster, con buses de dos pisos al fondo" },
  { base: "londres-7", alt: "El Big Ben y el Parlamento recortados contra el cielo del atardecer, vistos desde el Támesis" },
].map((img) => ({
  ...img,
  thumb: `/imagenes/${img.base}-thumb.webp`,
  full: `/imagenes/${img.base}.webp`,
}));

export default function Galeria() {
  const [activo, setActivo] = useState(false);
  const [index, setIndex] = useState(0);

  const cerrarLightbox = useCallback(() => setActivo(false), []);
  const lightboxRef = useModalAccesible(activo, cerrarLightbox);

  const abrirLightbox = (i) => {
    setIndex(i);
    setActivo(true);
  };

  const siguiente = useCallback(
    () => setIndex((i) => (i + 1) % imagenes.length),
    []
  );
  const anterior = useCallback(
    () => setIndex((i) => (i - 1 + imagenes.length) % imagenes.length),
    []
  );

  const onKeyDownLightbox = (e) => {
    if (e.key === "ArrowRight") siguiente();
    if (e.key === "ArrowLeft") anterior();
  };

  return (
    <section id="galeria" className="galeria-timmy">
      <div className="galeria-header">
        <h2>Galería</h2>
        <p>
          Además de crear sitios web, me gusta viajar y capturar momentos a través
          de la fotografía.
        </p>
      </div>

      <ul className="galeria-masonry">
        {imagenes.map((img, i) => (
          <li className="galeria-item" key={img.base}>
            <button
              type="button"
              className="galeria-boton"
              onClick={() => abrirLightbox(i)}
              aria-label={`Ampliar foto: ${img.alt}`}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </button>
          </li>
        ))}
      </ul>

      {activo && (
        <div
          className="lightbox active"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${imagenes[index].alt}`}
          ref={lightboxRef}
          tabIndex={-1}
          onKeyDown={onKeyDownLightbox}
          onClick={(e) =>
            e.target.classList.contains("lightbox") && cerrarLightbox()
          }
        >
          <button
            type="button"
            className="cerrar"
            onClick={cerrarLightbox}
            aria-label="Cerrar la foto ampliada"
          >
            &times;
          </button>

          <img
            className="lightbox-img"
            src={imagenes[index].full}
            alt={imagenes[index].alt}
          />

          <button
            type="button"
            className="prev"
            onClick={anterior}
            aria-label="Foto anterior"
          >
            &#10094;
          </button>
          <button
            type="button"
            className="next"
            onClick={siguiente}
            aria-label="Foto siguiente"
          >
            &#10095;
          </button>

          <p className="lightbox-contador" aria-live="polite">
            {index + 1} / {imagenes.length}
          </p>
        </div>
      )}
    </section>
  );
}
