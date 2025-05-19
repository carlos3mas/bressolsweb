import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Button from "./Button";

export default function HeroCarousel() {
  return (
    <section className="relative w-full min-h-screen  overflow-hidden">
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
          <div key={n} className="relative w-full min-h-screen">
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
       
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-nunito font-bold drop-shadow-lg mb-6 leading-snug">
          C.E.I BRESSOLS
        </h1>
        <Button />
      </div>

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/30 z-0" />
    </section>
  );
}
