"use client";

import CarruselInstalaciones from "@/components/carrusels/CarruselInstalaciones";
import { BiHomeAlt2, BiBookOpen, BiShieldAlt2 } from "react-icons/bi";

export default function GaleriaInstalaciones() {
  return (
    <section className="py-16 bg-gray-50 relative bg-white">
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
      <div className="container mx-auto px-4 mb-16 relative">
        {/* Main title centered above everything */}
        <h1 className="text-5xl font-bold text-gray-900 mb-16 text-center">
          LES NOSTRES INSTALACIONS
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto principal a la izquierda */}
          <div className="flex flex-col items-center md:items-end text-center md:text-center justify-center h-full">
            <div>
              <p className="text-2xl text-gray-800 leading-relaxed font-medium mb-4">
                A Bressols, cada espai està dissenyat amb cura i dedicació per
                oferir una experiència educativa excepcional.
              </p>
              <p className="text-lg text-gray-600">
                Les nostres aules són més que simples espais: són entorns
                d&apos;aprenentatge que inspiren, estimulen i protegeixen.
              </p>
            </div>
          </div>

          {/* Características a la derecha */}
          <div className="flex flex-col space-y-10">
            {/* Característica 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <BiHomeAlt2 size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Espais Adaptats
                </h3>
                <p className="text-gray-700">
                  Aules específicament dissenyades per a cada grup d&apos;edat.
                </p>
              </div>
            </div>
            {/* Característica 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center">
                <BiBookOpen size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Materials Educatius
                </h3>
                <p className="text-gray-700">
                  Els millors recursos per estimular l&apos;aprenentatge.
                </p>
              </div>
            </div>
            {/* Característica 3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center">
                <BiShieldAlt2 size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Entorn Segur
                </h3>
                <p className="text-gray-700">
                  Instal·lacions amb totes les mesures de seguretat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CarruselInstalaciones />
    </section>
  );
}
