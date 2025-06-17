import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contacto() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id="contacte" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 120 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center relative"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-bressolsAzul mb-8">
          Contacte
        </h2>

        <p className="text-base sm:text-lg text-gray-700 mb-4">
          Ens pots trobar a l&apos;adreça següent o contactar amb nosaltres per
          telèfon o correu electrònic.
        </p>

        <div className="text-base sm:text-md text-bressolsAzul font-bold mb-6 leading-relaxed">
          Av. del Mar, 29 (MonteBlanco)
          <br />
          12200 Onda, Castelló
          <br />
          Tel: 964 123 456
          <br />
          Email: bressols@exemple.com
        </div>

        <div className="w-full h-64 sm:h-96 rounded-md shadow-md overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Av.%20del%20Mar%2C%2029%2C%2012200%20El%20Monte%20Blanco%2C%20Castell%C3%B3&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
}
