'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const imagenes = ['/comedor.jpg', '/cocina.JPG', '/descanso.jpg']

export default function CarruselClases() {
  const [indiceActual, setIndiceActual] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenes.length)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [])

  const avanzar = () => {
    setIndiceActual((prev) => (prev + 1) % imagenes.length)
  }

  const retroceder = () => {
    setIndiceActual((prev) => (prev - 1 + imagenes.length) % imagenes.length)
  }

  return (
    <div className="w-full md:w-1/2 relative h-64 sm:h-80 overflow-hidden rounded-lg shadow-lg">
      <Image
        src={imagenes[indiceActual]}
        alt={`Foto servei ${indiceActual + 1}`}
        fill
        className="object-cover rounded-lg transition-opacity duration-500"
        priority
      />

      {/* Botones manuales */}
      <button
        onClick={retroceder}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full shadow-md"
      >
        ◀
      </button>
      <button
        onClick={avanzar}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full shadow-md"
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {imagenes.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === indiceActual ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
