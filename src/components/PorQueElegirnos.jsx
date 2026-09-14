import { porQueElegirnos } from "../data/siteConfig";

export default function PorQueElegirnos() {
  return (
    <section className="porque">
      <div className="wrap">
        <div className="section-head section-head--light">
          <h2 className="section-head__title">Por qué elegirnos</h2>
        </div>

        <div className="porque__list">
          {porQueElegirnos.map((item) => (
            <div className="porque__item" key={item.titulo}>
              <span className="porque__bar" aria-hidden="true" />
              <div>
                <h3 className="porque__title">{item.titulo}</h3>
                <p className="porque__desc">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
