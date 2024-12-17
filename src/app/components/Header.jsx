'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  // Detecta si el componente se ha montado en el lado del cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const countAnimation1 = useSpring({
    from: { number: 0 },
    number: isClient ? 200 : 0, // Solo inicia si está en el cliente
    config: { duration: 1000 },
  });

  const countAnimation2 = useSpring({
    from: { number: 0 },
    number: isClient ? 7 : 0,
    config: { duration: 1000 },
  });

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

          <ul className="flex flex-col items-center md:flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-12 justify-end text-sm md:text-[15px] leading-[22px] text-white">
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
        </div>

        {/* Mensaje principal */}
        <div className="mt-28 flex flex-col items-center justify-center text-center text-white font-bold text-5xl sm:text-6xl">
          <p>Consulta por tu servicio hoy mismo</p>
          <p className="text-sm sm:text-base mt-4 text-white opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus.
          </p>
        </div>

        {/* Contadores animados */}
        <div className="flex justify-center gap-20 mt-28">
          {/* Contador 1 */}
          <div className="flex flex-col items-center text-white">
            <animated.p className="text-7xl font-bold">
              {countAnimation1.number.to((n) => `+${n.toFixed(0)}`)}
            </animated.p>
            <p className="text-3xl font-bold mt-4">Clientes</p>
          </div>

          {/* Contador 2 */}
          <div className="flex flex-col items-center text-white">
            <animated.p className="text-7xl font-bold">
              {countAnimation2.number.to((n) => `+${n.toFixed(0)}`)}
            </animated.p>
            <p className="text-3xl font-bold mt-4">Años de Experiencia</p>
          </div>
        </div>
=======
    <header className="w-full py-6 px-2 sm:px-8">
      <div className="flex sm:px-6 sm:px-14 sm:items-center sm:gap-4">
        <h2 className="flex-1">
          <Link
            href="/"
            className="flex sm:flex-row items-center gap-2 sm:gap-6"
          >
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <div>
              <span className="font-bold text-2xl sm:text-1xl text-blue-500">
                Isoterm
              </span>
              <span className="font-bold text-2xl sm:text-1xl text-red-600">
                Chile
              </span>
            </div>
          </Link>
        </h2>
        <ul className="flex flex-col items-center md:flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-12 justify-end text-sm md:text-[15px] leading-[22px]">
          {navbarItems.map(({ ref, label }) => (
            <li key={ref} className="relative">
              <Link href={ref}>{label}</Link>
            </li>
          ))}
        </ul>

      </div>
    </header>
  );
};

export default Header;
