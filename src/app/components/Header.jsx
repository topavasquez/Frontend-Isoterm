'use client';

import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="relative w-full bg-white">
      {/* Contenido */}
      <div className="relative z-10 w-full h-full flex flex-col px-4 sm:px-8">
        <div className="flex items-center justify-between sm:px-6 sm:gap-4 mt-4">

          {/* Logo */}
            <a href="/" className="flex sm:flex-row items-center gap-2 sm:gap-6">
              <Image src="/logonegro.png" alt="Logo" width={100} height={100} />
              <div className="font-bold text-2xl sm:text-3xl">
                <span className="text-red-500">Isoterm</span>
                <span className="text-blue-600">Chile</span>
              </div>
            </a>

          {/* Menú para pantallas grandes */}
          <ul className="hidden md:flex flex-row gap-10 lg:gap-12 text-sm md:text-[15px] leading-[22px] text-gray-800">
            {[
              { ref: "/", label: "Inicio" },
              { ref: "/sobrenosotros", label: "Sobre Nosotros" },
              { ref: "/servicios", label: "Servicios" },
              { ref: "/contacto", label: "Contacto" },
            ].map(({ ref, label }) => (
              <li key={ref}>
                <a href={ref} className="hover:text-gray-400 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón para menú en móviles */}
          <button
            className="block md:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menú desplegable para móvil */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-200 flex flex-col justify-center items-center z-50">
            <button
              className="absolute top-4 right-4 text-black text-3xl focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="flex flex-col gap-8 text-2xl text-black font-bold">
              {[
                { ref: "/", label: "Inicio" },
                { ref: "/sobrenosotros", label: "Sobre Nosotros" },
                { ref: "/producto", label: "Productos" },
                { ref: "/contacto", label: "Contacto" },
              ].map(({ ref, label }) => (
                <li key={ref}>
                  <a
                    href={ref}
                    className="hover:text-blue-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
