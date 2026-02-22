import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarruselComedor from "./carrusels/CarruselComedor";
import CarruselActividades from "./carrusels/CarruselActividades";
import CarruselExcursiones from "./carrusels/CarruselExcursiones";
import RecuadroDecorativo from "./RecuadroDecorativo";

export default function Servicios() {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refExtra, inViewExtra] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      id="serveis"
      className="py-16 px-4 sm:px-6 lg:px-8 relative bg-fondo2 text-black overflow-hidden"
    >

      <div className="max-w-6xl mx-auto relative text-black relative">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-bressolsAzul mb-8 sm:mb-12 lg:mb-16 text-center">
          SERVEIS
        </h2>

        {/* Activitats d'aprenentatge */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -80 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12"
        >
          <CarruselActividades />
          <div className="flex flex-col md:w-1/2 w-full px-2">
            <h1 className="text-xl xs:text-2xl font-bold text-center mb-2 sm:mb-3">
              Activitats D&apos;aprenentatge
            </h1>
            <p className="text-sm xs:text-base sm:text-lg text-justify leading-relaxed">
              Oferim una àmplia gamma d&apos;activitats
              pensades per estimular el desenvolupament integral dels
              menuts. Tallers creatius, música, psicomotricitat i molt més!
            </p>
          </div>
        </motion.div>

        {/* Activitats extraescolars */}
        <motion.div
          ref={refExtra}
          initial={{ opacity: 0, x: 100 }}
          animate={inViewExtra ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 mb-12"
        >
          <CarruselExcursiones />
          <div className="flex flex-col md:w-1/2 w-full px-2">
            <h1 className="text-xl xs:text-2xl font-bold text-center mb-2 sm:mb-3">
              Activitats extraescolars
            </h1>
            <p className="text-sm xs:text-base sm:text-lg text-justify leading-relaxed">
              Organitzem excursions, festes i trobades en família per a
              reforçar el vincle entre escola, alumnes i famílies. Aquestes
              experiències fomenten la convivència, la participació i la
              creació de records compartits que enriqueixen la comunitat
              educativa.
            </p>
          </div>
        </motion.div>

        {/* Servei de menjador i descans */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: -80 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12"
        >
          <CarruselComedor />
          <div className="flex flex-col md:w-1/2 w-full px-2">
            <h1 className="text-xl xs:text-2xl font-bold text-center mb-2 sm:mb-3">
              Servei de menjador y descans
            </h1>
            <p className="text-sm xs:text-base sm:text-lg text-justify leading-relaxed">
              Comptem amb servei de menjador amb cuina propia menús equilibrats i
              adaptats a les necessitats de cada etapa. Fomentem hàbits
              alimentaris saludables i oferim una zona de descans acollidora
              perquè puguin relaxar-se després de dinar i recuperar
              energies.
            </p>
          </div>
        </motion.div>

        {/* Transport escolar */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, x: 100 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8"
        >
          <div className="md:w-1/2 w-full relative h-64 sm:h-80">
            <Image
              src="/furgoneta.jpg"
              alt="Transport escolar"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col md:w-1/2 w-full px-2">
            <h1 className="text-xl xs:text-2xl font-bold text-center mb-2 sm:mb-3">
              Transport escolar
            </h1>
            <p className="text-sm xs:text-base sm:text-lg text-justify leading-relaxed">
              Disposem de transport escolar per facilitar la conciliació familiar d&apos;una manera segura i còmoda.
            </p>
          </div>
        </motion.div>

        {/* Bocadillos centrados al final */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-12 sm:mt-16">
          <RecuadroDecorativo
            texto="Donem la màxima importància a l'aprenentatge de les tres llengües: valencià, castellà i anglès."
            color="naranja"
            posicion="izquierda"
            delay={0.4}
            inView={inView3}
            className="relative left-0 right-0 max-w-sm"
          />
          <RecuadroDecorativo
            texto="Crear un ambient on els xiquets puguen aprendre jugant i on tot es vehicula per a la seua relació íntegra com a persones."
            color="verde"
            posicion="derecha"
            delay={0.6}
            inView={inView3}
            className="relative left-0 right-0 max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
