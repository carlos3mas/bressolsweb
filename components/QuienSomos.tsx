import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarruselClases from './CarruselCLases' 


export default function QuienSomos() {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id="quien-somos" className="py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-bressolsAzul mb-12">
          Qui som
        </h2>

        {/* Foto del centro + texto */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12"
        >
          <div className="w-full md:w-1/2 relative h-64 sm:h-80">
            <Image
              src="/foto-centro.jpg"
              alt="Foto del centre Bressols"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <p className="text-base sm:text-lg text-gray-700 text-justify md:w-1/2">
            Som un centre d&apos;educació infantil amb més de 20 anys d&apos;experiència, oferint un espai càlid, segur i estimulant per als més petits. La nostra filosofia es basa en el respecte pel ritme de cada infant, fomentant la seva autonomia, curiositat i creativitat des del primer dia.
          </p>
        </motion.div>

        {/* Foto del equip + texto */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8"
        >
          <div className="w-full md:w-1/2 relative h-64 sm:h-80">
            <Image
              src="/foto-equip.jpg"
              alt="Equip educatiu Bressols"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-base sm:text-lg text-gray-700 text-justify md:w-1/2">
            Comptem amb un equip de professionals altament qualificades, implicades i amb una gran vocació educativa. La seva dedicació diària fa possible una atenció individualitzada i un ambient de confiança on cada infant pot créixer feliç.
          </p>
        </motion.div>

        {/* Foto de las clases + texto */}
       <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12"
        >
        <CarruselClases />
          <p className="text-base sm:text-lg text-gray-700 text-justify md:w-1/2">
            Disposem d&apos;unes instal·lacions modernes i adaptades a les necessitats dels infants, amb aules àmplies, zones de joc i espais exteriors. Cada racó del centre està dissenyat per estimular la seva curiositat i fomentar el seu aprenentatge a través del joc.
           </p>
        </motion.div>
      </div>
    </section>
  );
}
