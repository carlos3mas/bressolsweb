
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-bressols text-gray-800 font-nunito">
      <div className="max-w-6xl mx-auto px-4 xs:px-6 py-8 xs:py-10 sm:py-12 space-y-6 sm:space-y-8">
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[2fr,1.2fr]">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[0.65rem] xs:text-xs tracking-[0.2em] xs:tracking-[0.3em] uppercase text-gray-600">
              C.E.I. Bressols
            </p>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
              Creant lligams des de la primera infància
            </h3>
            <p className="text-sm xs:text-base text-gray-700 leading-relaxed">
              Espai educatiu homologat i subvencionat per la Conselleria
              d&apos;Educació. Acompanyem famílies i infants amb una metodologia
              basada en l&apos;afecte, el joc i el respecte pels ritmes.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 text-sm xs:text-base text-gray-700">
            <p className="font-semibold text-gray-900">Contacte</p>
            <p className="leading-relaxed">Avinguda del Mar, 29 · 12200 Onda (Castelló)</p>
            <p>Telèfon: 964 604 202</p>
            <p>Email: bressols7@hotmail.com</p>
            <SocialLinks className="pt-2 text-gray-700" iconClassName="w-6 h-6 xs:w-7 xs:h-7" />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 sm:pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 text-xs xs:text-sm text-gray-700">
          <p>© {new Date().getFullYear()} Bressols. Tots els drets reservats.</p>
          <p className="text-[0.65rem] xs:text-xs sm:text-sm">
            Sitio web diseñado y desarrollado por Carlos Mas.
          </p>
        </div>
      </div>
    </footer>
  );
}
