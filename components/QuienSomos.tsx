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
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-y-20 lg:gap-12">
          {/* Imágenes lado izquierdo */}
          <motion.div
            className="lg:w-1/2 w-full relative"
            variants={popVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="relative w-full h-[350px] xs:h-[450px] sm:h-[600px] rounded-2xl overflow-visible p-2 sm:p-4">
              {/* Círculo decorativo de fondo (sin opacity-80 para que no se vea gris en móvil) */}
              <div className="absolute left-[50%] sm:left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] xs:w-[350px] sm:w-[500px] h-[280px] xs:h-[350px] sm:h-[500px] bg-bressolsAzul rounded-full z-0"></div>
              
              <div className="relative block sm:grid sm:grid-cols-2 sm:gap-4 h-full w-full">
                {/* First image */}
                <div className="absolute sm:relative top-[5%] sm:top-auto left-[5%] sm:left-auto w-[55%] sm:w-[350px] h-[40%] sm:h-[250px] rounded-xl overflow-hidden z-10 transition-all duration-300 md:hover:scale-105 md:hover:-rotate-2 md:hover:shadow-xl transform sm:-translate-y-4 shadow-lg sm:shadow-none">
                  <Image
                    src="/foto-centro.jpg"
                    alt="Exterior del centre Bressols"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Second image */}
                <div className="absolute sm:relative top-[15%] sm:top-auto right-[2%] sm:right-auto w-[45%] sm:w-[250px] h-[35%] sm:h-[250px] rounded-xl overflow-hidden z-10 transition-all duration-300 md:hover:scale-105 md:hover:-rotate-2 md:hover:shadow-xl transform sm:translate-x-[20%] sm:translate-y-12 shadow-lg sm:shadow-none">
                  <Image
                    src="/actividad-8.jpg"
                    alt="Interior del centre Bressols"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Third image */}
                <div className="absolute sm:relative bottom-[5%] sm:bottom-auto left-[10%] sm:left-auto w-[80%] sm:w-[400px] h-[45%] sm:h-[300px] sm:col-span-2 rounded-xl overflow-hidden z-20 transition-all duration-300 md:hover:scale-105 md:hover:-rotate-2 md:hover:shadow-xl transform sm:translate-x-[15%] sm:translate-y-[-20%] shadow-xl sm:shadow-none">
                  <Image
                    src="/actividad-11.jpg"
                    alt="Equip de professionals de Bressols"
                    fill
                    className="object-cover"
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
              SOM UN CENTRE D&apos;EDUCACIÓ INFANTIL AMB MÉS DE 25 ANYS D&apos;
              EXPERIÈNCIA
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm xs:text-base sm:text-lg leading-relaxed">
              Ens dediquem a l&apos;educació i dels menuts de 0 a 3 anys,
              Oferint un espai càlid, segur i estimulant per als més menuts. Treballem respectant el ritme de cada xiquet/a,
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

        {/* Bocadillos centrados al final */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-20 sm:mt-24 px-4">
          <RecuadroDecorativo
            texto="Docents professionals que es fan responsables de la formació i de l'educació dels alumnes."
            color="azul"
            posicion="izquierda"
            delay={0.3}
            inView={inView}
            className="relative left-0 right-0 max-w-sm"
          />
          <RecuadroDecorativo
            texto="Seguiment continuat del procés educatiu, a fi d'estar permanentment informats de l'evolució del seu fill i poder intervindre de forma immediata en cas d'haver problemes."
            color="morado"
            posicion="izquierda"
            delay={0.4}
            inView={inView}
            className="relative left-0 right-0 max-w-sm"
          />
          <RecuadroDecorativo
            texto="Més de 25 anys d'experiència educant menuts de 0 a 3 anys."
            color="sky"
            posicion="derecha"
            delay={0.5}
            inView={inView}
            className="relative left-0 right-0 max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
