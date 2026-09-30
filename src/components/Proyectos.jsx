import React from 'react';
import './Proyectos.css';

const proyectos = [
  {
    numero: "01",
    titulo: "Austreon: atención automatizada por WhatsApp para clínicas",
    descripcion: "Bots de WhatsApp para clínicas dentales y veterinarias que agendan turnos y responden consultas, con un panel donde el equipo toma el control de una conversación cuando el bot no alcanza y se la devuelve al terminar.",
    url: "https://austreon.com",
    img: "/imagenes/austreon.webp",
    alt: "Captura del sitio de Austreon, sistema de automatización para clínicas",
    tags: ["n8n", "IA conversacional", "WhatsApp", "Supabase"],
    destacado: true,
    caso: "#caso-austreon",
  },
  {
    numero: "02",
    titulo: "Landing Comercial Río Hondo",
    descripcion: "La empresa necesitaba una presencia web que transmitiera su identidad y convirtiera visitas en consultas comerciales. Desarrollé la landing junto al equipo de UXnicorp, partiendo de su diseño.",
    url: "https://lnkd.in/dcs-_KHz",
    img: "/imagenes/riohondo.webp",
    alt: "Captura de la landing comercial de Río Hondo",
    tags: ["React", "UXnicorp"],
  },
  {
    numero: "03",
    titulo: "Portfolio Fotográfico",
    descripcion: "El cliente necesitaba publicar y administrar su archivo de fotos sin depender de terceros cada vez que quería subir material. Sitio con carga de imágenes a Cloudinary, organización por categorías y un área privada de gestión.",
    url: "https://biologofotos.vercel.app/",
    img: "/imagenes/biologo.webp",
    alt: "Captura del portfolio fotográfico",
    tags: ["Node.js", "MongoDB", "Cloudinary"],
  },
];

function TarjetaProyecto({ proyecto }) {
  return (
    <article className={`proyecto-card ${proyecto.destacado ? 'proyecto-card--destacado' : ''}`}>
      <a
        href={proyecto.url}
        target="_blank"
        rel="noopener noreferrer"
        className="proyecto-imagen-wrap"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={proyecto.img}
          alt={proyecto.alt}
          className="proyecto-imagen"
          loading="lazy"
          decoding="async"
        />
      </a>

      <div className="proyecto-contenido">
        <span className="proyecto-numero">{proyecto.numero}</span>
        <h3 className="proyecto-titulo">
          <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
            {proyecto.titulo}
          </a>
        </h3>
        <p className="proyecto-descripcion">{proyecto.descripcion}</p>

        <ul className="proyecto-tags">
          {proyecto.tags.map((tag) => (
            <li key={tag} className="proyecto-tag">{tag}</li>
          ))}
        </ul>

        <div className="proyecto-acciones">
          {proyecto.caso && (
            <a href={proyecto.caso} className="proyecto-link proyecto-link--caso">
              Ver el caso en detalle
            </a>
          )}
          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="proyecto-link"
          >
            Ver proyecto <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectos seccion">
      <div className="proyectos-header">
        <h2 className="subtitulo">Proyectos</h2>
      </div>

      <div className="proyectos-grid">
        {proyectos.map((p) => (
          <TarjetaProyecto key={p.numero} proyecto={p} />
        ))}
      </div>
    </section>
  );
}
