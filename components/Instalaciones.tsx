"use client";

import CarruselInstalaciones from "@/components/carrusels/CarruselInstalaciones";
import { BiHomeAlt2, BiBookOpen, BiShieldAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RecuadroDecorativo from "./RecuadroDecorativo";

export default function GaleriaInstalaciones() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.18 });

  const popVariant = {
    hidden: { opacity: 0, scale: 0.92, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="py-16 bg-gray-50 relative bg-white overflow-hidden">

      <div className="custom-shape-divider-top-1750165719">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="custom-shape-divider-bottom-1750165861">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 mb-12 sm:mb-16 relative" ref={ref}>
        {/* Main title centered above everything */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-bressolsAzul mb-8 sm:mb-12 lg:mb-16 text-center">
          LES NOSTRES INSTALACIONS
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Texto principal a la izquierda */}
          <motion.div
            className="flex flex-col items-center md:items-end text-center md:text-center justify-center h-full"
            variants={popVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div>
              <p className="text-lg xs:text-xl sm:text-2xl text-gray-800 leading-relaxed font-medium mb-3 sm:mb-4">
                A Bressols, cada espai està dissenyat amb cura i dedicació per
                oferir una experiència educativa excepcional.
              </p>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed">
                Les nostres aules són més que simples espais: són entorns
                d&apos;aprenentatge que inspiren, estimulen i protegeixen.
              </p>
            </div>
          </motion.div>

          {/* Características a la derecha */}
          <motion.div
            className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-10"
            variants={popVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Característica 1 */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <BiHomeAlt2 size={28} className="text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-bressolsAzul mb-1">
                  Espais Adaptats
                </h3>
                <p className="text-sm xs:text-base text-gray-700 leading-relaxed">
                  Aules específicament dissenyades per a cada grup d&apos;edat.
                </p>
              </div>
            </div>
            {/* Característica 2 */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-sky-400 rounded-full flex items-center justify-center">
                <BiBookOpen size={28} className="text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-bressolsAzul mb-1">
                  Materials Educatius
                </h3>
                <p className="text-sm xs:text-base text-gray-700 leading-relaxed">
                  Els millors recursos per estimular l&apos;aprenentatge.
                </p>
              </div>
            </div>
            {/* Característica 3 */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-rose-400 rounded-full flex items-center justify-center">
                <BiShieldAlt2 size={28} className="text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-bressolsAzul mb-1">
                  Entorn Segur
                </h3>
                <p className="text-sm xs:text-base text-gray-700 leading-relaxed">
                  Instal·lacions amb totes les mesures de seguretat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CarruselInstalaciones />

      {/* Bocadillos centrados al final */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-12 sm:mt-16 px-4 pb-8">
        <RecuadroDecorativo
          texto="Instal·lacions modernes, plurifuncionals, adaptades a la pràctica docent i necessitats dels xiquets."
          color="naranja"
          posicion="izquierda"
          delay={0.4}
          inView={inView}
          className="relative left-0 right-0 max-w-sm"
        />
        <RecuadroDecorativo
          texto="L'escolarització primerenca permet als alumnes millorar els seus processos cognitius i personals."
          color="sky"
          posicion="derecha"
          delay={0.6}
          inView={inView}
          className="relative left-0 right-0 max-w-sm"
        />
      </div>
    </section>
  );
}
