import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="#contacte"
      className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 sm:px-8 py-3 sm:py-4 transition-all duration-200 scale-100 active:scale-95 w-full max-w-xs sm:max-w-fit bg-bressolsAzul"
    >
      {/* Fondo fijo: ya no es animado */}
      <span className="absolute inset-0 rounded-full bg-bressolsAzul w-full h-full" />

      {/* Texto azul oscuro */}
      <span className="relative z-10 text-sm sm:text-base font-black font-bold tracking-wide uppercase text-white">
        Contacta Amb Nosaltres
      </span>

      {/* Flecha azul oscuro */}
      <svg
        className="relative z-10 ml-3 h-4 w-4 stroke-white transform translate-x-0"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M13 18l6-6-6-6" />
      </svg>
    </Link>
  );
}
