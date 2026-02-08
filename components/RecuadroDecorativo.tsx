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
  destacado?: boolean
}

const colores = {
  azul: 'bg-blue-600',
  naranja: 'bg-amber-500',
  rojo: 'bg-red-500',
  fucsia: 'bg-pink-500',
  verde: 'bg-teal-600',
  morado: 'bg-purple-600',
  sky: 'bg-sky-600'
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
  destacado = false,
}: RecuadroDecorativoProps) {
  const rotacion = posicion === 'izquierda' ? -2 : 2
  const xInicial = posicion === 'izquierda' ? -100 : 100



  const defaultPosition = `${posicion === 'izquierda' ? 'left-4 xl:left-8' : 'right-4 xl:right-8'} ${top || ''} ${bottom || ''}`.trim()
  const positionClasses = className ? className : `${defaultPosition} ${maxWidth}`.trim()

  const isRelative = className?.includes('relative');
  const escala = destacado ? 1.15 : 1;
  const padding = destacado ? 'px-8 py-10' : 'px-6 py-8';
  const fontSize = destacado ? 'text-lg sm:text-xl' : 'text-base';
  const borderWidth = destacado ? 'border-4' : 'border-2';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: xInicial, y: 20, scale: 0.9 }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: escala } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={`${isRelative ? 'block' : 'hidden lg:block absolute'} ${positionClasses} z-10 pointer-events-none`}
      style={{ transform: `rotate(${rotacion}deg)` }}
    >
      {/* Recuadro principal con forma redondeada */}
      <div
        className={`relative ${colores[color]} text-white ${padding} rounded-3xl shadow-lg pointer-events-auto ${borderWidth} border-white/30`}
        style={{
          borderRadius: '24px',
        }}
      >
        <p className={`${fontSize} ${destacado ? 'font-bold' : 'font-medium'} leading-relaxed relative z-10`}>
          {texto}
        </p>
      </div>
    </motion.div>
  )
}

