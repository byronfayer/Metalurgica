import { servicios } from "../data/siteConfig";

const ICONS = {
  soldadura: (
    <path d="M4 20L20 4M13 4h7v7M9 15l-4 4M4 15v4h4" />
  ),
  estructuras: (
    <path d="M4 20V6l8-3 8 3v14M4 20h16M8 20V9M12 20V7M16 20V9" />
  ),
  medida: (
    <path d="M3 17l14-14M3 17h4v-4M9 11l2 2M13 7l2 2M17 3l4 4-4 4" />
  ),
  reparaciones: (
    <path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 005.4-5.4l-2.6 2.6-2-2 2.6-2.6z" />
  ),
  fabricacion: (
    <path d="M3 21l3-3m0 0l6-6m-6 6l-3-3m9-3l6-6m0 0l3 3m-3-3l-3 3M6 12l6 6" />
  ),
  portones: (
    <path d="M3 21V6l4-3v18M3 6h4m6 15V6l4-3v18m-4-15h4M13 12h-2M17 12h-2M7 12H5M7 16H5M17 16h-2" />
  ),
};

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-head__title">Servicios</h2>
          <p className="section-head__sub">
            Estructura preliminar — se ajusta con los servicios reales una vez
            confirmados con el cliente.
          </p>
        </div>

        <div className="servicios__grid">
          {servicios.map((s) => (
            <article key={s.id} className="servicio-card">
              <svg
                className="servicio-card__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {ICONS[s.id]}
              </svg>
              <h3 className="servicio-card__title">{s.titulo}</h3>
              <p className="servicio-card__desc">{s.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
