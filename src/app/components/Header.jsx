'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="relative w-full h-[70vh]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/banner.jpg"
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full h-full flex flex-col px-4 sm:px-8">
        <div className="flex items-center justify-between sm:px-6 sm:gap-4 mt-4">
          {/* Logo */}
          <h2>
            <a href="/" className="flex sm:flex-row items-center gap-2 sm:gap-6">
              <Image src="/logo1.png" alt="Logo" width={100} height={100} />
              <div>
                <span className="font-bold text-2xl sm:text-3xl text-blue-300 hover:text-blue-400 transition-colors">
                  Isoterm
                </span>
                <span className="font-bold text-2xl sm:text-3xl text-white">
                  Chile
                </span>
              </div>
            </a>
          </h2>

          {/* Menú para pantallas grandes */}
          <ul className="hidden md:flex flex-row gap-10 lg:gap-12 text-sm md:text-[15px] leading-[22px] text-white">
            {[
              { ref: "/", label: "Inicio" },
              { ref: "/sobrenosotros", label: "Sobre Nosotros" },
              { ref: "/producto", label: "Productos" },
              { ref: "/contacto", label: "Contacto" },
            ].map(({ ref, label }) => (
              <li key={ref}>
                <a href={ref} className="hover:text-blue-200 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón para menú en móviles */}
          <button
            className="block md:hidden text-white text-2xl focus:outline-none"
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

        {/* Mensaje principal */}
        <div className="mt-52 flex flex-col items-center justify-center text-center text-white font-bold text-3xl sm:text-5xl md:text-6xl px-4 ">
          <p>Consulta por tu servicio hoy mismo</p>
          <p className="text-sm sm:text-base mt-4 text-white opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
