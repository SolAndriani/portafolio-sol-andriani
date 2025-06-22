export default function Proyectos() {
  return (
    <section id="proyectos" className="seccion">
      <h2>Proyectos</h2>
      <div className="proyectos-grid">
        <div className="proyecto">
          <a
            href="https://solandriani-github-io.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/imagenes/calendario.png"
              alt="Vista previa del proyecto Calendario"
              className="preview-img"
            />
          </a>
          <p>
            <strong>Calendario</strong>
            <br />
            Una forma simple de organizar tus días.
          </p>
        </div>
        <div className="proyecto">
          <a
            href="https://mi-app-portafolio-b2ac-2veztyi7q-sol-andrianis-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/imagenes/gifs.png"
              alt="Vista previa del portafolio"
              className="preview-img"
            />
          </a>
          <p>
            <strong>Buscador de GIFs</strong>
            <br />
            Buscá tus GIFs favoritos por categoría.
          </p>
        </div>
        <div className="proyecto">
          <a
            href="https://superh-roes-i1c6-qms1p0qve-sol-andrianis-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/imagenes/marvel.png"
              alt="Vista previa del proyecto Superhéroes"
              className="preview-img"
            />
          </a>
          <p>
            <strong>Superhéroes</strong>
            <br />
            Explora el universo Marvel y DC.
          </p>
        </div>
      </div>
    </section>
  );
}

