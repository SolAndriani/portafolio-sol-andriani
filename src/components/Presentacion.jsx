import './Presentacion.css';

export default function Presentacion() {
  return (
    <section id="presentacion" className="presentacion">
      <div className="presentacion-contenedor">

        {/* Foto lateral */}
        <div className="foto-lateral">
          <img 
            src="/imagenes/foto sol.jpg" 
            alt="Sol Andriani, desarrolladora web especializada en soluciones digitales" 
            className="foto-sol"
          />
        </div>

        {/* Texto de presentación */}
        <div className="texto-presentacion">
          <h1>¡Hola! Soy <span>Sol Andriani</span></h1>
          <h2>Desarrolladora web</h2>
          <p>
            Desarrollo sitios web <strong>modernos y funcionales</strong> para profesionales y emprendedores, 
            combinando <strong>navegación intuitiva</strong>, <strong>diseño cuidado</strong> y 
            <strong>estructura clara</strong> para potenciar su presencia digital.
          </p>

          <a href="#contacto" className="btn-contacto">Trabajemos juntos</a>

          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/in/solandriani" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/solandriani" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
