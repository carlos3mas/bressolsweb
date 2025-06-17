import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";


export default function HeroCarousel() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-screen overflow-hidden">
      {/* Carrusel al fondo */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        className="w-full h-full"
      >
        {[1, 2, 3].map((n) => (
          <div key={n} className="relative w-full min-h-[60vh] md:min-h-screen">
            <Image
              src={`/hero${n}.jpg`}
              alt={`Hero ${n}`}
              layout="fill"
              objectFit="cover"
              priority={n === 1}
            />
          </div>
        ))}
      </Carousel>

      {/* Texto fijo al centro */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-bressols z-10 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 text-center">
          <span className="border-2 sm:border-4 border-bressols px-3 sm:px-6 py-2 sm:py-3 rounded-lg shadow-2xl bg-black/30">
            C.E.I. BRESSOLS
          </span>
        </h1>
        <a
          href="#contacte"
          className="inline-block px-4 py-2 sm:px-8 sm:py-3 mt-4 text-base sm:text-lg font-semibold rounded-full bg-bressolsAzul text-white shadow-lg hover:bg-bressolsAzul/90 transition-colors duration-200"
        >
          CONTACTA AMB NOSALTRES
        </a>
      </div>

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/30 z-0" />
    </section>
  );
}
