import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiFastapi, SiTailwindcss, SiN8N } from "react-icons/si";
import "./Tecnologias.css";

export default function Tecnologias() {
  const herramientas = [
    { name: "HTML5", icon: <FaHtml5 />, clase: "html" },
    { name: "CSS3", icon: <FaCss3Alt />, clase: "css" },
    { name: "JavaScript", icon: <FaJs />, clase: "js" },
    { name: "React", icon: <FaReact />, clase: "react" },
    { name: "Tailwind", icon: <SiTailwindcss />, clase: "tailwind" },
    { name: "Node.js", icon: <FaNodeJs />, clase: "node" },
    { name: "Python", icon: <FaPython />, clase: "python" },
    { name: "FastAPI", icon: <SiFastapi />, clase: "fastapi" },
    { name: "PostgreSQL", icon: <SiPostgresql />, clase: "postgresql" },
    { name: "MongoDB", icon: <SiMongodb />, clase: "mongodb" },
    { name: "n8n", icon: <SiN8N />, clase: "n8n" },
    { name: "Git/GitHub", icon: <FaGitAlt />, clase: "git" },
  ];

  return (
    <section id="tecnologias" className="tecnologias seccion">
      <h2>Tecnologías</h2>
      <p>Estas son las herramientas y lenguajes que utilizo para desarrollar mis proyectos:</p>
      <div className="tecnologias-grid">
        {herramientas.map((item, index) => (
          <div key={index} className={`tecnologias-item ${item.clase}`}>
            <span className="tecnologias-icon">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}