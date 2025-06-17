import Image from "next/image";
// Si no tienes react-icons instalado, usa emojis como iconos:
// import { FaHandsHelping, FaShieldAlt, FaLightbulb, FaSmile, FaUsers } from "react-icons/fa";

const filosofiaPunts = [
  {
    icon: <span className="text-3xl">🛡️</span>,
    title: "Seguretat",
    desc: "Un entorn segur on cada infant pot créixer i aprendre amb tranquil·litat.",
  },
  {
    icon: <span className="text-3xl">🤝</span>,
    title: "Confiança",
    desc: "Relació propera i de confiança amb les famílies i els infants.",
  },
  {
    icon: <span className="text-3xl">💡</span>,
    title: "Educació",
    desc: "Acompanyem el desenvolupament integral amb una educació activa i creativa.",
  },
  {
    icon: <span className="text-3xl">😊</span>,
    title: "Afecte",
    desc: "L'afecte i el respecte són la base de la nostra tasca educativa.",
  },
  {
    icon: <span className="text-3xl">👥</span>,
    title: "Comunitat",
    desc: "Fomentem la col·laboració i el sentiment de pertinença.",
  },
  {
    icon: <span className="text-3xl">🚀</span>,
    title: "Innovació",
    desc: "Apostem per la innovació pedagògica i l’ús de noves metodologies per millorar l’aprenentatge.",
  },
];

export default function Filosofia() {
  return (
    <section className="py-16 bg-white relative">
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
      <div className="flex flex-col items-center mb-10 relative">
        <Image
          src="/pegatina.png"
          alt="Seguretat, Confiança, Educació"
          width={220}
          height={220}
          className="drop-shadow-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-bressolsAzul mb-2 text-center">
          La nostra filosofia
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-8">
          A Bressols, la nostra filosofia es basa en valors fonamentals que
          guien el nostre dia a dia.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
        {filosofiaPunts.map((punt, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <div>{punt.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-bressolsAzul mb-1">
                {punt.title}
              </h3>
              <p className="text-gray-700">{punt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
