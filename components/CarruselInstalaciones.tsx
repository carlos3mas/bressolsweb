"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/foto-clase-3.jpg",
  "/foto-clase-4.jpg",
  "/foto-clase-6.jpg",
  "/foto-clase-7.jpg",
  "/foto-clase-2.jpg",
  "/comedor.jpg",
  "/foto-clase.jpg",
  "/foto-clase-5.JPG",
  "/cocina.jpg"
];

export default function CarruselInstalaciones() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <img
        src={images[current]}
        alt={`Instalación ${current + 1}`}
        className="w-full h-72 object-cover transition-all duration-700"
      />
      {/* Controles */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
        aria-label="Anterior"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
        aria-label="Siguiente"
      >
        &#8594;
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block w-2 h-2 rounded-full ${i === current ? "bg-blue-500" : "bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
} 