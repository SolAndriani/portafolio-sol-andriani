import { useState } from "react";
import "./Contacto.css";

export default function Contacto({ modalOpen, setModalOpen }) {
  const [form, setForm] = useState({
    name: "",
    from: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  if (!modalOpen) return null; // 🔸 No muestra nada si el modal está cerrado

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log("📥 Respuesta del backend:", data);

      if (response.ok) {
        setStatus("Mensaje enviado correctamente!");
        setForm({ name: "", from: "", subject: "", message: "" });
      } else {
        setStatus("⚠ Error: " + (data.error || "Algo salió mal"));
      }
    } catch (error) {
      console.error("Error en fetch:", error);
      setStatus("No se pudo enviar el formulario. Revisá CORS o el backend.");
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setModalOpen(false)}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="cerrar-modal" onClick={() => setModalOpen(false)}>
          ✖
        </button>

        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from"
            placeholder="Email"
            value={form.from}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
        <p className="estado">{status}</p>
      </div>
    </div>
  );
}
