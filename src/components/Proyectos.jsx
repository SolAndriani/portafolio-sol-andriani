import React, { useState } from 'react';
import './Proyectos.css';

const proyectos = [
  {
    numero: "01",
    titulo: "Austreon — Automatización para Clínicas Dentales",
    descripcion: "Sistema completo con IA conversacional conectada a WhatsApp, agenda inteligente y triage médico automático (Rojo/Amarillo/Verde). Odontograma digital, formulario post-atención y landing page bilingüe en React + Vite.",
    url: "https://austreon.com",
    img: "/imagenes/austreon.png",
    alt: "Austreon",
    tags: ["n8n", "Groq/LLaMA", "Twilio", "React", "Airtable"],
  },
  {
    numero: "02",
    titulo: "Portfolio Fotográfico",
    descripcion: "Sitio web personalizado para mostrar fotografías organizadas por categorías. Carga y almacenamiento de imágenes con Cloudinary, rutas públicas y protegidas.",
    url: "https://biologofotos.vercel.app/",
    img: "/imagenes/Biologo.png",
    alt: "Portfolio Fotográfico",
    tags: ["Node.js", "MongoDB", "Cloudinary"],
  },
  {
    numero: "03",
    titulo: "Sistema de Gestión de Libros",
    descripcion: "Aplicación fullstack con autenticación JWT, CRUD completo con paginación y rutas privadas por usuario. Backend en FastAPI con PostgreSQL, SQLAlchemy y Pydantic.",
    url: "https://sistema-libros-frontend.vercel.app/",
    img: "/imagenes/libros.png",
    alt: "Sistema de Gestión de Libros",
    tags: ["FastAPI", "PostgreSQL", "JWT", "React"],
  },
  {
    numero: "04",
    titulo: "Landing Comercial Río Hondo",
    descripcion: "Desarrollo de landing page junto al equipo de UXnicorp. Web clara que refleja la identidad de la empresa y facilita el contacto comercial.",
    url: "https://lnkd.in/dcs-_KHz",
    img: "/imagenes/riohondo.png",
    alt: "Landing Comercial Río Hondo",
    tags: ["React", "UXnicorp"],
  },
];

export default function Proyectos() {
  const [actual, setActual] = useState(0);

  const anterior = () => setActual((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1));
  const siguiente = () => setActual((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1));

  const proyecto = proyectos[actual];

  return (
    <section id="proyectos" className="proyectos seccion">
      <div className="proyectos-header">
        <h2 className="subtitulo">Proyectos</h2>
        <div className="proyectos-nav">
          <button className="nav-btn" onClick={anterior}>&#8592;</button>
          <span className="nav-contador">{String(actual + 1).padStart(2, '0')} / {String(proyectos.length).padStart(2, '0')}</span>
          <button className="nav-btn" onClick={siguiente}>&#8594;</button>
        </div>
      </div>
      <div className="proyecto-showcase">
        <a href={proyecto.url} target="_blank" rel="noopener noreferrer" className="proyecto-imagen-wrap">
          <img src={proyecto.img} alt={proyecto.alt} className="proyecto-imagen" />
        </a>
        <div className="proyecto-contenido">
          <span className="proyecto-numero">{proyecto.numero}</span>
          <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
          <p className="proyecto-descripcion">{proyecto.descripcion}</p>
          <div className="proyecto-tags">
            {proyecto.tags.map((tag, i) => (
              <span key={i} className="proyecto-tag">{tag}</span>
            ))}
          </div>
          <a href={proyecto.url} target="_blank" rel="noopener noreferrer" className="proyecto-link">
            Ver proyecto &#8599;
          </a>
        </div>
      </div>
      <div className="proyectos-progress">
        {proyectos.map((_, i) => (
          <button
            key={i}
            className={`progress-bar ${i === actual ? 'progress-bar--activo' : ''}`}
            onClick={() => setActual(i)}
          />
        ))}
      </div>
    </section>
  );
}