import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiFigma } from "react-icons/si";
import "./Tecnologias.css";

export default function Tecnologias() {
  const herramientas = [
    { name: "HTML5", icon: <FaHtml5 />, class: "html" },
    { name: "CSS3", icon: <FaCss3Alt />, class: "css" },
    { name: "JavaScript", icon: <FaJs />, class: "js" },
    { name: "React", icon: <FaReact />, class: "react" },
    { name: "Node.js", icon: <FaNodeJs />, class: "node" },
    { name: "MongoDB", icon: <SiMongodb />, class: "mongodb" },
    { name: "Git/GitHub", icon: <FaGitAlt />, class: "git" },
    { name: "Figma", icon: <SiFigma />, class: "figma" },
  ];

  return (
    <section id="tecnologias" className="tecnologias seccion">
      <h2>Tecnologías</h2>
      <p>Estas son las herramientas y lenguajes que utilizo para desarrollar mis proyectos:</p>
      <div className="tecnologias-grid">
        {herramientas.map((item, index) => (
          <div key={index} className={`tecnologias-item ${item.class}`}>
            <span className="tecnologias-icon">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
