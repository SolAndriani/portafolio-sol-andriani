import { useState } from "react";
import "./Contacto.css";

const EMAIL = "solagustinaandriani2@gmail.com";
const ENDPOINT = "https://portafolio-sol-andriani-backend.onrender.com/api/contact";

export default function Contacto({ modalOpen, setModalOpen }) {
  const [form, setForm] = useState({
    name: "",
    from: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [enviando, setEnviando] = useState(false);

  if (!modalOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Si el envío falla, el mensaje no se pierde: se abre el mail con todo cargado.
  const mailtoRescate = () => {
    const asunto = encodeURIComponent(form.subject || "Contacto desde el portafolio");
    const cuerpo = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.from}`
    );
    return `mailto:${EMAIL}?subject=${asunto}&body=${cuerpo}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setStatus(null);

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ tipo: "ok", texto: "¡Listo! Tu mensaje llegó. Te respondo a la brevedad." });
        setForm({ name: "", from: "", subject: "", message: "" });
      } else {
        setStatus({
          tipo: "error",
          texto: "No pude enviar el mensaje desde acá.",
        });
      }
    } catch (error) {
      setStatus({
        tipo: "error",
        texto: "No pude enviar el mensaje desde acá.",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="cerrar-modal"
          onClick={() => setModalOpen(false)}
          aria-label="Cerrar formulario de contacto"
        >
          ✖
        </button>
        <h2>Contacto</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
          <input type="email" name="from" placeholder="Email" value={form.from} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Asunto" value={form.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Mensaje" value={form.message} onChange={handleChange} required />
          <button type="submit" disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {status && (
          <div className={`estado estado--${status.tipo}`} role="status" aria-live="polite">
            <p>{status.texto}</p>
            {status.tipo === "error" && (
              <p className="estado-alternativa">
                Escribime directo a{" "}
                <a href={mailtoRescate()}>{EMAIL}</a> y no perdés lo que ya redactaste.
              </p>
            )}
          </div>
        )}

        <p className="contacto-directo">
          ¿Preferís el mail? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </div>
  );
}
