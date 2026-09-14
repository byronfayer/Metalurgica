import { sobreNosotros } from "../data/siteConfig";

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="wrap nosotros__grid">
        <div className="nosotros__visual" aria-hidden="true">
          <div className="nosotros__frame">
            <span className="nosotros__frame-label">Foto de Pablo / taller — pendiente</span>
          </div>
        </div>

        <div className="nosotros__content">
          <p className="section-head__eyebrow">Quién hace el trabajo</p>
          <h2 className="section-head__title">{sobreNosotros.titulo}</h2>
          {sobreNosotros.texto.map((p, i) => (
            <p key={i} className="nosotros__text">
              {p}
            </p>
          ))}
          <ul className="nosotros__tags">
            <li>Trabajo personalizado</li>
            <li>Calidad de terminación</li>
            <li>Compromiso con los plazos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
