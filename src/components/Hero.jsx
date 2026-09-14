import { empresa, contacto } from "../data/siteConfig";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__plate" aria-hidden="true" />

      <div className="wrap hero__content">
        <p className="hero__eyebrow">Taller metalúrgico</p>
        <h1 className="hero__title">{empresa.nombre}</h1>
        <p className="hero__slogan">{empresa.slogan}</p>
        <p className="hero__desc">{empresa.descripcion}</p>

        <div className="hero__actions">
          <a
            className="btn btn--accent"
            href={`https://wa.me/${contacto.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
              contacto.whatsappTexto
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>
          <a className="btn btn--ghost" href="#servicios">
            Ver servicios
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
