import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialLinks from "./SocialLinks";
import RecuadroDecorativo from "./RecuadroDecorativo";

export default function Contacto() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id="contacte" className="py-12 xs:py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-fondo relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 120 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-6xl mx-auto relative"
      >
        <div className="text-center mb-8 sm:mb-12 lg:mb-14 relative">
          <span className="text-xs xs:text-sm uppercase tracking-[0.2em] xs:tracking-[0.3em] text-bressolsAzul">
            ESTEM PER A TU
          </span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 mt-2 sm:mt-3">
            CONTACTE
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed px-2">
            Ens encanta acompanyar-te en cada pas. Vine a visitar-nos o posa&apos;t en
            contacte per telèfon, correu o xarxes socials. Responem molt ràpid!
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl xs:text-2xl font-semibold text-bressolsAzul mb-3 sm:mb-4">Dades de contacte</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 text-sm xs:text-base leading-relaxed">
                  <span className="font-semibold text-gray-900">Adreça:</span>
                  Av. del Mar, 29 (MonteBlanco) · 12200 Onda, Castelló
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 text-sm xs:text-base">
                  <span className="font-semibold text-gray-900">Telèfon:</span>
                  964 604 202
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 text-sm xs:text-base">
                  <span className="font-semibold text-gray-900">Email:</span>
                  bressols7@hotmail.com
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg xs:text-xl font-semibold text-bressolsAzul mb-2 sm:mb-3">
                Xarxes socials
              </h4>
              <p className="text-gray-700 text-sm xs:text-base leading-relaxed">
                Comparteix moments i descobreix tot el que fem al centre.
              </p>
              <SocialLinks className="justify-start mt-4 sm:mt-5 text-bressolsAzul" iconClassName="w-7 h-7 xs:w-8 xs:h-8" />
            </div>

            <div className="border border-dashed border-bressolsAzul/40 p-4 sm:p-5 rounded-2xl text-xs xs:text-sm text-gray-600 leading-relaxed">
              <p>
                Horari d&apos;atenció: dilluns a divendres de 7:45 a 17:00. Si ens
                escrius fora d&apos;aquest horari, et respondrem el més prompte possible.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-56 xs:h-64 sm:h-80 lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=Av.%20del%20Mar%2C%2029%2C%2012200%20El%20Monte%20Blanco%2C%20Castell%C3%B3&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Bocadillos centrados al final */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-12 sm:mt-16">
          <RecuadroDecorativo
            texto="Seguiment continuat del procés educatiu, a fi d'estar permanentment informats de l'evolució del seu fill."
            color="morado"
            posicion="izquierda"
            delay={0.4}
            inView={inView}
            className="relative left-0 right-0 max-w-sm"
          />
          <RecuadroDecorativo
            texto="Horari d'atenció: dilluns a divendres de 7:45 a 17:00."
            color="azul"
            posicion="derecha"
            delay={0.6}
            inView={inView}
            className="relative left-0 right-0 max-w-sm"
          />
        </div>
      </motion.div>
    </section>
  );
}
