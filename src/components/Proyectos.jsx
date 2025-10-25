import React from 'react';
import './Proyectos.css';

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Portfolio Fotográfico",
      descripcion: "Página web personalizada mostrando fotografías",
      url: "https://biologofotos.vercel.app/",
      img: "/imagenes/Biologo.png",
      alt: "Portfolio Fotográfico de Agustín",
    },
    {
      titulo: "Glosario de React",
      descripcion: "Proyecto práctico para repasar y reforzar conceptos de React, incluyendo Hooks, componentes, props y eventos.",
      url: "https://glosario-react.vercel.app/",
      img: "/imagenes/React.jpg",
      alt: "Glosario de conceptos de React",
    },
    {
      titulo: "Calendario",
      descripcion: "Aplicación web simple para organizar tareas y días. Desarrollo funcional y responsive.",
      url: "https://solandriani-github-io.vercel.app/",
      img: "/imagenes/calendario.png",
      alt: "Proyecto Calendario",
    },
    {
      titulo: "Buscador de GIFs",
      descripcion: "Proyecto: buscador de GIFs por categoría con React y diseño intuitivo.",
      url: "https://mi-app-portafolio-b2ac.vercel.app",
      img: "/imagenes/gifs.png",
      alt: "Buscador de GIFs",
    },
    {
      titulo: "Superhéroes",
      descripcion: "Explora el universo Marvel y DC con un proyecto funcional y diseño moderno.",
      url: "https://superh-roes-i1c6.vercel.app",
      img: "/imagenes/marvel.png",
      alt: "Proyecto Superhéroes",
    },
  ];

  return (
    <section id="proyectos" className="proyectos seccion">
      <h2 className="subtitulo">Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="proyecto-card"
            key={index}
          >
            <img
              src={proyecto.img}
              alt={proyecto.alt}
              className="proyecto-img"
            />
            <div className="proyecto-info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
