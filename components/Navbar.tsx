import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-bressols fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Logo + nombre */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-xl font-bold text-bressolsAzul"
        >
          <Image src="/logo.jpg" alt="Logo Bressols" width={32} height={32} />
          <span className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
            C.E.I Bressols
          </span>
        </a>
       

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden text-bressolsAzul"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú en pantallas grandes */}
        <div className="hidden sm:flex space-x-2 text-sm">
          <a
            href="#hero"
            className="px-4 py-2 rounded-md text-bressolsAzul font-medium transition hover:bg-bressolsAzul hover:text-bressols"
          >
            Inici
          </a>
          <a
            href="#quien-somos"
            className="px-4 py-2 rounded-md text-bressolsAzul font-medium transition hover:bg-bressolsAzul hover:text-bressols"
          >
            Qui som
          </a>
           <a
            href="#instalaciones"
            className="px-4 py-2 rounded-md text-bressolsAzul font-medium transition hover:bg-bressolsAzul hover:text-bressols"
          >
            Instalacions
          </a>
          <a
            href="#serveis"
            className="px-4 py-2 rounded-md text-bressolsAzul font-medium transition hover:bg-bressolsAzul hover:text-bressols"
          >
            Serveis
          </a>
          <a
            href="#filosofia"
            className="px-4 py-2 rounded-md text-bressolsAzul font-medium transition hover:bg-bressolsAzul hover:text-bressols"
          >
            Filosofia
          </a>
          <a
            href="#contacte"
            className="px-4 py-2 rounded-md text-bressolsAzul font-medium transition hover:bg-bressolsAzul hover:text-bressols"
          >
            Contacte
          </a>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-start px-4 pb-4 bg-bressols space-y-2">
          <a
            href="#hero"
            onClick={toggleMenu}
            className="text-bressolsAzul font-medium"
          >
            Inici
          </a>
          <a
            href="#quien-somos"
            onClick={toggleMenu}
            className="text-bressolsAzul font-medium"
          >
            Qui som
          </a>
          <a
            href="#instalaciones"
            onClick={toggleMenu}
            className="text-bressolsAzul font-medium"
          >
            Instalacions
          </a>
          <a
            href="#serveis"
            onClick={toggleMenu}
            className="text-bressolsAzul font-medium"
          >
            Serveis
          </a>
          <a
            href="#filosofia"
            onClick={toggleMenu}
            className="text-bressolsAzul font-medium"
          >
            Filosofia
          </a>
          <a
            href="#contacte"
            onClick={toggleMenu}
            className="text-bressolsAzul font-medium"
          >
            Contacte
          </a>
        </div>
      )}
    </nav>
  );
}
