import { trabajos } from "../data/siteConfig";

export default function Trabajos() {
  return (
    <section id="trabajos" className="trabajos">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-head__title">Trabajos realizados</h2>
          <p className="section-head__sub">
            Piezas y estructuras fabricadas en el taller.
          </p>
        </div>

        <div className="trabajos__grid">
          {trabajos.map((t) => (
            <figure key={t.id} className="trabajo-tile">
              <img src={t.imagen} alt={t.titulo} loading="lazy" />
              <figcaption className="trabajo-tile__caption">{t.titulo}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
