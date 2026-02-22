import Image from "next/image";
import { FcLock, FcLike, FcIdea, FcCollaboration, FcApproval, FcMindMap } from "react-icons/fc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RecuadroDecorativo from "./RecuadroDecorativo";
// Si no tienes react-icons instalado, usa emojis como iconos:
// import { FaHandsHelping, FaShieldAlt, FaLightbulb, FaSmile, FaUsers } from "react-icons/fa";

const filosofiaPunts = [
  {
    icon: (
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
        <FcLock size={32} />
      </span>
    ),
    title: "Seguretat",
    desc: "Un entorn segur on cada menut pot créixer i aprendre amb tranquil·litat.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
        <FcApproval size={32} />
      </span>
    ),
    title: "Confiança",
    desc: "Relació propera i de confiança amb les famílies i els menuts.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
        <FcIdea size={32} />
      </span>
    ),
    title: "Educació",
    desc: "Acompanyem el desenvolupament integral amb una educació activa i creativa.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
        <FcLike size={32} />
      </span>
    ),
    title: "Afecte",
    desc: "L'afecte i el respecte són la base de la nostra tasca educativa.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
        <FcCollaboration size={32} />
      </span>
    ),
    title: "Comunitat",
    desc: "Fomentem la col·laboració i el sentiment de pertinença.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
        <FcMindMap size={32} />
      </span>
    ),
    title: "Innovació",
    desc: "Apostem per la innovació pedagògica i l'ús de noves metodologies per millorar l'aprenentatge.",
  },
];

export default function Filosofia() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const popVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">

      <div className="custom-shape-divider-bottom-1750165793">
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
      <div className="custom-shape-divider-top-1750165959">
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
      <div className="flex flex-col items-center mb-6 sm:mb-10 relative px-4">
        <Image
          src="/foto-equip.png"
          alt="Equip de professionals de Bressols"
          width={180}
          height={180}
          className="drop-shadow-lg mb-4 sm:mb-6 w-[150px] h-[150px] xs:w-[180px] xs:h-[180px] sm:w-[220px] sm:h-[220px]"
        />
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 lg:mb-16 text-center">
          LA NOSTRA IDENTITAT  
        </h2>
        <p className="text-sm xs:text-base sm:text-lg text-gray-700 text-center max-w-2xl mb-6 sm:mb-8 leading-relaxed">
          A Bressols es treballa amb valors fonamentals que guien el nostre dia a dia.
        </p>
      </div>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative px-4 mb-12 sm:mb-16"
        variants={popVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        {filosofiaPunts.map((punt, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-white rounded-2xl p-4 xs:p-6 sm:p-8 shadow-md hover:shadow-xl transition border border-gray-100"
            variants={popVariant}
          >
            {punt.icon}
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-bressolsAzul mb-2 text-center">
              {punt.title}
            </h3>
            <p className="text-gray-700 text-center text-sm xs:text-base leading-relaxed">
              {punt.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bocadillo destacado centrado al final */}
      <div className="flex justify-center items-center mt-12 sm:mt-16 px-4 pb-8">
        <RecuadroDecorativo
          texto="Aprendre a ser i aprendre a fer."
          color="rojo"
          posicion="derecha"
          delay={0.4}
          inView={inView}
          className="relative left-0 right-0 max-w-md"
          destacado={true}
        />
      </div>
    </section>
  );
}
