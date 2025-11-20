import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RecuadroDecorativo from "./RecuadroDecorativo";

export default function QuienesSomos() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Variantes para el pop
  const popVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="py-16 bg-fondo relative overflow-hidden" ref={ref}>
      <RecuadroDecorativo
        texto="Docents professionals que es fan responsables de la formació i de l'educació dels alumnes."
        color="azul"
        posicion="izquierda"
        delay={0.3}
        inView={inView}
        className="left-4 bottom-4 max-w-sm"
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imágenes lado izquierdo */}
          <motion.div
            className="lg:w-1/2 w-full relative"
            variants={popVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="relative w-full h-[380px] xs:h-[420px] sm:h-[600px] rounded-2xl overflow-visible p-2 sm:p-4">
              {/* Updated circle with correct color and position */}
              <div className="hidden sm:block absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-bressolsAzul rounded-full z-0"></div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 h-full">
                {/* First image */}
                <div className="relative h-[100px] xs:h-[120px] sm:h-[250px] w-full sm:w-[350px] rounded-xl overflow-hidden z-10 transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-xl transform sm:-translate-y-4">
                  <Image
                    src="/foto-centro.jpg"
                    alt="Exterior del centre Bressols"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>

                {/* Second image */}
                <div className="relative h-[100px] xs:h-[120px] sm:h-[250px] w-full sm:w-[250px] rounded-xl overflow-hidden z-10 transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-xl transform sm:translate-x-[20%] sm:translate-y-12">
                  <Image
                    src="/actividad-8.jpg"
                    alt="Interior del centre Bressols"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* Third image */}
                <div className="relative h-[140px] xs:h-[160px] sm:h-[300px] w-full sm:w-[400px] rounded-xl overflow-hidden col-span-1 sm:col-span-2 z-20 transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-xl transform sm:translate-x-[15%] sm:translate-y-[-20%]">
                  <Image
                    src="/excursion-1.jpg"
                    alt="Equip de professionals de Bressols"
                    fill
                    className="object-cover rounded-xl"
                    style={{ objectPosition: "center center" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contenido lado derecho */}
          <motion.div
            className="lg:w-1/2"
            variants={popVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="text-bressols font-medium mb-2 block text-sm sm:text-base">
              C.E.I BRESSOLS
            </span>
            <p className="text-xl xs:text-2xl sm:text-4xl font-bold text-bressoLS mb-4 sm:mb-6 leading-tight">
              CENTRE AUTORITZAT HOMOLOGAT I SUBVENCIONAT PER LA CONSELLERIA
              D&apos;EDUCACIÓ.
            </p>
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-bold text-bressolsAzul mb-4 sm:mb-6 leading-tight">
              SOM UN CENTRE D&apos;EDUCACIÓ INFANTIL AMB MÉS DE 20 ANYS D&apos;
              EXPERIÈNCIA
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm xs:text-base sm:text-lg leading-relaxed">
              Ens dediquem a l&apos;educació i dels infants de 0 a 3 anys,
              Oferint un espai càlid, segur i estimulant per als més petits. La
              nostra filosofia es basa en el respecte pel ritme de cada infant,
              fomentant la seva autonomia, curiositat i creativitat des del
              primer dia.
            </p>
            <Link
              href="#contacte"
              className="inline-block px-4 py-2 sm:px-8 sm:py-3 mt-2 sm:mt-4 text-sm xs:text-base sm:text-lg font-semibold rounded-full bg-bressolsAzul text-white shadow-lg hover:bg-bressolsAzul/90 transition-colors duration-200"
            >
              CONTACTA AMB NOSALTRES
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
