'use client'

import { motion } from 'framer-motion'

interface RecuadroDecorativoProps {
  texto: string
  color: 'azul' | 'naranja' | 'rojo' | 'fucsia' | 'verde' | 'morado' | 'sky'
  posicion: 'izquierda' | 'derecha'
  top?: string
  bottom?: string
  delay?: number
  inView: boolean
  maxWidth?: string
  className?: string
}

const colores = {
  azul: 'bg-blue-600',
  naranja: 'bg-orange-500',
  rojo: 'bg-red-600',
  fucsia: 'bg-fuchsia-700',
  verde: 'bg-green-600',
  morado: 'bg-purple-700',
  sky: 'bg-sky-600'
}

const coloresClaro = {
  azul: 'bg-blue-200',
  naranja: 'bg-orange-200',
  rojo: 'bg-red-200',
  fucsia: 'bg-fuchsia-200',
  verde: 'bg-green-200',
  morado: 'bg-purple-200',
  sky: 'bg-sky-200'
}

export default function RecuadroDecorativo({
  texto,
  color,
  posicion,
  top,
  bottom,
  delay = 0.3,
  inView,
  maxWidth = 'max-w-xs',
  className,
}: RecuadroDecorativoProps) {
  const rotacion = posicion === 'izquierda' ? -2 : 2
  const xInicial = posicion === 'izquierda' ? -100 : 100

  // Clip-path irregular para forma más orgánica
  const clipPath = posicion === 'izquierda'
    ? 'polygon(0% 0%, 95% 2%, 100% 8%, 98% 95%, 3% 100%, 0% 92%)'
    : 'polygon(5% 0%, 100% 2%, 97% 8%, 100% 95%, 5% 100%, 0% 92%)'

  const defaultPosition = `${posicion === 'izquierda' ? 'left-4 xl:left-8' : 'right-4 xl:right-8'} ${top || ''} ${bottom || ''}`.trim()
  const positionClasses = className ? className : `${defaultPosition} ${maxWidth}`.trim()

  return (
    <motion.div
      initial={{ opacity: 0, x: xInicial, y: 20, scale: 0.9 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={`hidden lg:block absolute ${positionClasses} z-10 pointer-events-none`}
      style={{ transform: `rotate(${rotacion}deg)` }}
    >
      {/* Fondo más claro para efecto 3D - más separado */}
      <div
        className={`absolute inset-0 ${coloresClaro[color]} opacity-70 blur-xl`}
        style={{
          clipPath,
          transform: `translate(12px, 12px) rotate(${rotacion}deg)`,
        }}
      />
      
      {/* Sombra intermedia para más profundidad */}
      <div
        className={`absolute inset-0 ${coloresClaro[color]} opacity-50 blur-lg`}
        style={{
          clipPath,
          transform: `translate(6px, 6px) rotate(${rotacion}deg)`,
        }}
      />
      
      {/* Sombra más cercana para efecto de capas */}
      <div
        className={`absolute inset-0 ${coloresClaro[color]} opacity-30 blur-sm`}
        style={{
          clipPath,
          transform: `translate(3px, 3px) rotate(${rotacion}deg)`,
        }}
      />
      
      {/* Recuadro principal con forma irregular */}
      <div
        className={`relative ${colores[color]} text-white px-6 py-8 shadow-2xl transition-all duration-300 hover:scale-105 pointer-events-auto border-2 border-white/20`}
        style={{
          clipPath,
        }}
      >
        <p className="text-base font-medium leading-relaxed relative z-10">
          {texto}
        </p>
      </div>
    </motion.div>
  )
}

