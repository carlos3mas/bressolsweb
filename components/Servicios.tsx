import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarruselComedor from "./carrusels/CarruselComedor";
import CarruselActividades from "./carrusels/CarruselActividades";

export default function Servicios() {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      id="serveis"
      className="py-16 px-4 sm:px-6 lg:px-8 relative bg-fondo2 text-black "
    >
      <div className="max-w-6xl mx-auto relative text-black relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Serveis
        </h2>

        {/* Activitats extraescolars */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -80 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12"
        >
          <CarruselActividades />
          <div className="flex flex-col md:w-1/2 w-full">
            <h1 className="text-2xl font-bold text-center mb-2">
              Activitats extraescolars
            </h1>
            <p className="text-base sm:text-lg text-justify">
              Oferim una àmplia gamma d&apos;activitats extraescolars
              dissenyades per potenciar el desenvolupament integral dels
              infants. Tallers creatius, música, psicomotricitat i molt més!
            </p>
          </div>
        </motion.div>

        {/* Servei de menjador */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 mb-12"
        >
          <CarruselComedor />
          <div className="flex flex-col md:w-1/2 w-full">
            <h1 className="text-2xl font-bold text-center mb-2">
              Servei de menjador
            </h1>
            <p className="text-base sm:text-lg text-justify">
              Comptem amb servei de menjador propi amb menús equilibrats i
              adaptats a les necessitats de cada etapa. Fomentem hàbits
              alimentaris saludables i una relació positiva amb el menjar.
            </p>
          </div>
        </motion.div>

        {/* Transport escolar */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, x: -100 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8"
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
          <div className="flex flex-col md:w-1/2 w-full">
            <h1 className="text-2xl font-bold text-center mb-2">
              Transport escolar
            </h1>
            <p className="text-base sm:text-lg text-justify">
              Disposem de transport escolar per facilitar la conciliació
              familiar i garantir l&apos;accés al centre d&apos;una manera
              segura, còmoda i puntual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
