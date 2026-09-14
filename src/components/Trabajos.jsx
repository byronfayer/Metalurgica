import { trabajos } from "../data/siteConfig";

export default function Trabajos() {
  return (
    <section id="trabajos" className="trabajos">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-head__title">Trabajos realizados</h2>
          <p className="section-head__sub">
            Espacio reservado para fotos reales de proyectos terminados.
          </p>
        </div>

        <div className="trabajos__grid">
          {trabajos.map((t) => (
            <div key={t.id} className="trabajo-tile">
              <span className="trabajo-tile__label">{t.titulo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
