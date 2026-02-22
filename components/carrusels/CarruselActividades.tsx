'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const imagenes = [
  '/actividad-2.jpg',
  '/actividad-3.jpg',
  '/actividad-4.jpg',
  '/actividad-5.jpg',
  '/actividad-8.jpg',
  '/actividad-12.jpg',
  '/actividad-13.jpg',
  '/hero3.jpg',
  '/hero4.jpg',
]

export default function CarruselClases() {
  const [indiceActual, setIndiceActual] = useState(0)

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenes.length)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [])


  return (
    <div className="w-full md:w-1/2 relative h-64 sm:h-80 overflow-hidden rounded-lg">
      <Image
        src={imagenes[indiceActual]}
        alt={`Foto clase ${indiceActual + 1}`}
        fill
        className="object-contain rounded-lg transition-opacity duration-500"
        priority
      />


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
