import Image from "next/image";

export default function HeroCarousel() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Fondo estático con blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero3.jpg"
          alt="Fondo Hero"
          fill
          className="object-cover blur-[5px] scale-105 filter brightness-75"
          priority
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 space-y-8 sm:space-y-12">
        
        {/* Título más grande y bonito */}
        <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-wide drop-shadow-2xl">
          <span className="text-bressols drop-shadow-lg filter px-4 py-2 rounded-xl backdrop-blur-sm">
            C.E.I. BRESSOLS
          </span>
        </h1>

        {/* Imágenes debajo del título */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          {/* Logo */}
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-full">
            <div className="relative w-full h-full rounded-full overflow-hidden">
               <Image
                src="/logo.jpg" 
                alt="Logo Bressols"
                fill
                className="object-contain rounded-full"
              />
            </div>
          </div>

          {/* Foto Equip */}
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 shadow-2xl transform hover:scale-105 transition-transform duration-300 rotate-3 rounded-2xl">
             <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/foto-equip.png"
                alt="Equip Bressols"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="pt-4">
             <a
              href="#contacte"
              className="inline-block px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-bold rounded-full bg-bressolsAzul text-white shadow-xl hover:bg-bressolsAzul/90 hover:scale-105 transition-all duration-300 ring-4 ring-white/30"
            >
              CONTACTA AMB NOSALTRES
            </a>
        </div>

      </div>
    </section>
  );
}

