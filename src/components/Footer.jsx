import { empresa, contacto } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <span className="navbar__mark" aria-hidden="true" />
          <span>
            {empresa.nombre}
            <br />
            <small style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--grey-light)" }}>
              {empresa.nombreLegal}
            </small>
          </span>
        </div>

        <div className="footer__contact">
          <span>{contacto.telefono}</span>
          <span>{contacto.email}</span>
          <span>{contacto.direccion}, {contacto.localidad}</span>
        </div>

        <div className="footer__social">
          <span>{contacto.instagram}</span>
          <span>{contacto.facebook}</span>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>© {new Date().getFullYear()} {empresa.nombre}. Boceto de sitio — pendiente de aprobación.</span>
      </div>
    </footer>
  );
}
