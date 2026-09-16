export default function TallerIlustracion() {
  return (
    <svg
      className="taller-ilustracion"
      viewBox="0 0 480 600"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustración de taller metalúrgico"
    >
      <defs>
        <linearGradient id="tallerBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b3036" />
          <stop offset="100%" stopColor="#15171a" />
        </linearGradient>
        <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8a3d" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e15b1f" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="480" height="600" fill="url(#tallerBg)" />

      {/* piso */}
      <rect x="0" y="480" width="480" height="120" fill="#101214" />
      <g stroke="#2a2e33" strokeWidth="1">
        <line x1="0" y1="510" x2="480" y2="500" />
        <line x1="0" y1="545" x2="480" y2="535" />
      </g>

      {/* pared con estantería de herramientas */}
      <g stroke="#3a3f45" strokeWidth="2" opacity="0.6">
        <line x1="40" y1="60" x2="40" y2="480" />
        <line x1="440" y1="60" x2="440" y2="480" />
        <rect x="40" y="90" width="90" height="8" fill="#3a3f45" />
        <rect x="40" y="140" width="90" height="8" fill="#3a3f45" />
        <rect x="40" y="190" width="90" height="8" fill="#3a3f45" />
      </g>
      {/* herramientas colgadas (siluetas simples) */}
      <g stroke="#5a6169" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M55 90 v-22 M70 90 v-26 M85 90 v-18" />
        <circle cx="105" cy="72" r="10" />
      </g>

      {/* banco de trabajo */}
      <rect x="230" y="400" width="200" height="16" fill="#4a5058" />
      <rect x="245" y="416" width="14" height="70" fill="#33383e" />
      <rect x="400" y="416" width="14" height="70" fill="#33383e" />

      {/* pieza sobre el banco */}
      <rect x="270" y="376" width="90" height="24" fill="#6b7278" stroke="#202427" strokeWidth="2" />

      {/* figura del soldador (silueta) */}
      <g fill="#0d0f11" stroke="#3a3f45" strokeWidth="2">
        <circle cx="175" cy="330" r="22" />
        <path d="M150 352 q25 -14 50 0 l8 90 h-66 z" />
        <path d="M155 360 l-30 40" strokeLinecap="round" strokeWidth="8" />
        <path d="M195 360 l35 20" strokeLinecap="round" strokeWidth="8" />
      </g>

      {/* chispas de soldadura */}
      <circle cx="235" cy="382" r="26" fill="url(#sparkGlow)" />
      <g stroke="#ffb26b" strokeWidth="2" strokeLinecap="round">
        <line x1="235" y1="382" x2="252" y2="365" />
        <line x1="235" y1="382" x2="258" y2="382" />
        <line x1="235" y1="382" x2="250" y2="400" />
        <line x1="235" y1="382" x2="222" y2="360" />
        <line x1="235" y1="382" x2="215" y2="395" />
      </g>
      <g fill="#ffb26b">
        <circle cx="252" cy="360" r="2" />
        <circle cx="262" cy="378" r="1.6" />
        <circle cx="247" cy="404" r="1.8" />
        <circle cx="218" cy="358" r="1.6" />
      </g>

      {/* estructura metálica de fondo (perfiles apoyados) */}
      <g stroke="#454b52" strokeWidth="4" strokeLinecap="round" opacity="0.8">
        <line x1="360" y1="480" x2="410" y2="300" />
        <line x1="378" y1="480" x2="428" y2="300" />
        <line x1="396" y1="480" x2="446" y2="300" />
      </g>
    </svg>
  );
}
