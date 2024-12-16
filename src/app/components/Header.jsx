import React from "react";
import Image from "next/image";


const Header = () => {
  const navbarItems = [
    { ref: "/", label: "Inicio" },
    { ref: "/sobrenosotros", label: "Sobre Nosotros" },
    { ref: "/producto", label: "Productos" },
    { ref: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="relative w-full h-[50vh]">

      <div className="absolute inset-0">
        <Image
          src="/banner.jpg" 
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          className=""
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

 
      <div className="relative z-10 w-full h-full flex flex-col px-4 sm:px-8">
        <div className="flex items-center justify-between sm:px-6 sm:gap-4 mt-4">

          <h2>
            <a href="/" className="flex sm:flex-row items-center gap-2 sm:gap-6">
              <Image src="/logo1.png" alt="Logo" width={100} height={100} />
              <div>
                <span className="font-bold text-2xl sm:text-3xl text-blue-300">
                  Isoterm
                </span>
                <span className="font-bold text-2xl sm:text-3xl text-white">
                  Chile
                </span>
              </div>
            </a>
          </h2>

          <ul className="flex flex-col items-center md:flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-12 justify-end text-sm md:text-[15px] leading-[22px] text-white">
            {navbarItems.map(({ ref, label }) => (
              <li key={ref} className="relative">
                <a href={ref} className="hover:text-blue-400 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
