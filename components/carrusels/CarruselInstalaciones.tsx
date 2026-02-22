"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/foto-clase-3.jpg",
  "/foto-clase-4.jpg",
  "/foto-clase-6.jpg",
  "/foto-clase-7.jpg",
  "/foto-clase-2.jpg",
  "/comedor.jpg",
  "/foto-clase.jpg",
  "/foto-clase-5.JPG",
  "/cocina.JPG"
];

export default function CarruselInstalaciones() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
      <Image
        src={images[current]}
        alt={`Instalación ${current + 1}`}
        className="w-full h-80 sm:h-96 object-contain transition-all duration-700"
        width={1000}
        height={1000}
      />
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