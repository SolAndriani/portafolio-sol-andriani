import React from 'react';

export default function Header() {
  return (
    <header className="encabezado">
      <div className="nombre-completo">
        <a href="#presentacion"><strong>Sol Andriani</strong></a>
        <a href="mailto:solagustinaandriani@gmail.com">solagustinaandriani@gmail.com</a>
      </div>
      <nav>
        <ul className="menu-navegacion">
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#galeria">Fotos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
