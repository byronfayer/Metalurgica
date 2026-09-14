import { useState } from "react";
import { contacto, empresa } from "../data/siteConfig";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: sin backend. Conectar a WhatsApp, email o formulario real.
    setEnviado(true);
  };

  const waHref = `https://wa.me/${contacto.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    contacto.whatsappTexto
  )}`;

  return (
    <section id="contacto" className="contacto">
      <div className="wrap contacto__grid">
        <div className="contacto__info">
          <p className="section-head__eyebrow">Hablemos del trabajo</p>
          <h2 className="section-head__title">Contacto</h2>

          <ul className="contacto__list">
            <li>
              <span className="contacto__label">WhatsApp</span>
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                {contacto.whatsappDisplay}
              </a>
            </li>
            <li>
              <span className="contacto__label">Teléfono</span>
              <span>{contacto.telefono}</span>
            </li>
            <li>
              <span className="contacto__label">Email</span>
              <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            </li>
            <li>
              <span className="contacto__label">Ubicación</span>
              <span>
                {contacto.direccion}, {contacto.localidad}
              </span>
            </li>
            <li>
              <span className="contacto__label">Horario</span>
              <span>{contacto.horario}</span>
            </li>
          </ul>
        </div>

        <form className="contacto__form" onSubmit={handleSubmit}>
          <h3 className="contacto__form-title">Enviar una consulta</h3>

          {enviado ? (
            <p className="contacto__ok">
              Gracias, {form.nombre || "consulta"} — te vamos a contactar a la
              brevedad. (Formulario de demostración, sin envío real aún.)
            </p>
          ) : (
            <>
              <label>
                Nombre
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Teléfono
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Mensaje
                <textarea
                  name="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit" className="btn btn--accent">
                Enviar consulta
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
